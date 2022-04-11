import { useEffect, useState, useRef } from "react";
import getTrendingTermsService from "service/getTrendingTermsService";
import Category from "components/Category";
import useNearScreen from 'hooks/useNearScreen'

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();
  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
}
