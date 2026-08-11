import { useEffect, useState } from "react";
import { getMoviesGenres } from "../services/api";

function useMoviesGenres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(function () {
    async function Genres() {
      try {
        setLoading(true);
        const data = await getMoviesGenres();
        setGenres(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    Genres();
  }, []);
  return { genres, loading, error };
}

export default useMoviesGenres;
