import { useEffect, useState } from "react";
import { getUpComingMovies } from "../services/api";

function useGetUpComing() {
  const [upComing, setUpComing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(function () {
    async function UpComing() {
      setUpComing([]);
      setError(null);
      setLoading(false);
      try {
        setLoading(true);
        const data = await getUpComingMovies();
        setUpComing(data?.results.slice(0, 14));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    UpComing();
  }, []);
  return { upComing, error, loading };
}

export default useGetUpComing;
