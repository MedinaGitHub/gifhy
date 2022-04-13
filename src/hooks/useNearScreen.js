import { useEffect, useState, useRef } from "react";

const INITIAL_PAGE = 0;

export default function useNearScreen() {
    const fromRef = useRef();
    const [page, usePage] = useState(INITIAL_PAGE);
    const [isNearScreen, setShow] = useState(false);
  
    useEffect(function () {
      console.log("hola");
      let observer;
      const onChange = (entries, observer) => {
        console.log("onchange");
        console.log("entries", entries);
        const el = entries[0];
        if (el.isIntersecting) {
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
          rootMargin: '100px',
        });
  
        observer.observe(fromRef.current);
      });
  
  
      return () => observer && observer.disconnect();
    });
  
    return { isNearScreen, fromRef };
  }
  