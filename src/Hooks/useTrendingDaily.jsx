import { useEffect, useState } from "react";
import { getTrendingDaily } from "../services/api";
// Getting the Daily movie trend from the API
function useTrendingDaily() {
  const [trendingDaily, setTrendingDaily] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function loadTrending() {
      setIsLoading(true);
      const data = await getTrendingDaily();
      // Getting the data and slice it to only 6 children
      setTrendingDaily(data.results.slice(0, 6));
      setIsLoading(false);
    }
    loadTrending();
  }, []);
  return { trendingDaily, isLoading };
}

export default useTrendingDaily;
