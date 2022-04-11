import { useEffect, useState, useRef } from "react";


export default function useNearScreen({ distance = "100px" }) {
    const fromRef = useRef();
    const [isNearScreen, setShow] = useState(false);
  
    useEffect(function () {
      console.log("hola");
      let observer;
      const onChange = (entries, observer) => {
        console.log("onchange");
        console.log("entries", entries);
        const el = entries[0];
        if (el.isIntersecting) {
          debugger;
          setShow(true);
          // el importante el disconnect si no el observer será eterno
          observer.disconnect();
        }
      };
  
      Promise.resolve(
        typeof IntersectionObserver !== "undefined"
          ? IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
          observer = new IntersectionObserver(onChange, {
          rootMargin: distance,
        });
  
        observer.observe(fromRef.current);
      });
  
  
      return () => observer && observer.disconnect();
    });
  
    return { isNearScreen, fromRef };
  }
  