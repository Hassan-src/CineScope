import { useEffect, useState } from "react";
import { getTrendingDaily } from "../services/api";
// Getting the Daily movie trend from the API
function useTrendingDaily() {
  const [trendingDaily, setTrendingDaily] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    async function loadTrending() {
      setLoading(true);
      const data = await getTrendingDaily();
      // Getting the data and slice it to only 6 children
      setTrendingDaily(data.results.slice(0, 6));
      setLoading(false);
    }
    loadTrending();
  }, []);
  return { trendingDaily, loading };
}

export default useTrendingDaily;
