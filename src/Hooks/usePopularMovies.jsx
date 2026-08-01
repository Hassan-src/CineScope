import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";

function usePopularMovies() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function Popular() {
      setPopular([]);
      setLoading(false);
      setError(null);
      try {
        setLoading(true);
        const data = await getPopularMovies();
        setPopular(data?.results.slice(0, 14));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    Popular();
  }, []);
  return { popular, error, loading };
}

export default usePopularMovies;
