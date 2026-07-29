import { useEffect, useState } from "react";
import { getTrendingDaily } from "../services/api";
// Getting the Daily movie trend from the API
function useTrendingDaily() {
  const [trendingDaily, setTrendingDaily] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(function () {
    async function loadTrending() {
      try {
        setLoading(true);
        const data = await getTrendingDaily();
        // Getting the data and slice it to only 6 children
        setTrendingDaily(data.results.slice(0, 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadTrending();
  }, []);
  return { trendingDaily, loading, error };
}

export default useTrendingDaily;
