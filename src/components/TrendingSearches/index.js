import { useEffect, useState } from "react";
import getTrendingTermsService from "service/getTrendingTermsService";
import Category from "../Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);

  useEffect(function () {
        const onChange = (entries) => {

            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
            }
        }

        const observer = new IntersectionObserver(onChange,{
            rootMargin: '100px'
        })

        observer.observe(document.getElementById('LazyTrending'))

  });

  return <div id="LazyTrending">{show ? <TrendingSearches /> : null}</div>;
}
