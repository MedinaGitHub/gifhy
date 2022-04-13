import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";

//the import searching is for just load the pice of code when is necessary  for mobile expiriciance is important
const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();
  return (
    <div ref={fromRef}>
      <Suspense fallback={null}
      >{isNearScreen ? <TrendingSearches /> : null}</Suspense>
    </div>
  );
}
