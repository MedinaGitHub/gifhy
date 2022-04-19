import { useEffect, useState, useRef } from "react";

const INITIAL_PAGE = 0;

export default function useNearScreen({externalRef, once= true}={}) {

    const fromRef = useRef();
    const [page, usePage] = useState(INITIAL_PAGE);
    const [isNearScreen, setShow] = useState(false);

    const element = externalRef ? externalRef :  fromRef 
  
    useEffect(function () {
      console.log("hola");
      let observer;
      const onChange = (entries, observer) => {
        console.log("onchange");
        console.log("entries", entries);
        const el = entries[0];
        if (el.isIntersecting) {
          setShow(true);
          // es importante el disconnect si no el observer será eterno
          //si once es false no se va a desconectar el listener
          //este elemento se usa para 2 cosa infinite scroll (la razón del once & para treding, donde este elemento se usa solo 1 vez)
          //pero en intinute scroll se usa varias veces y si se desconecta se queda pegado en show true.
          once && observer.disconnect();
        }else{
          !once  && setShow(false);
        }
      };
  
      Promise.resolve(
        typeof IntersectionObserver !== "undefined"
          ? IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
          observer = new IntersectionObserver(onChange, {
          rootMargin: '100px',
        });
  
        if (element) observer.observe(element.current);
      });
  
  
      return () => observer && observer.disconnect();
    });
  
    return { isNearScreen, fromRef };
  }
  