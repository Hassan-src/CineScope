import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

function useMovieDetails(movie_id) {
  const [detail, setDetail] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {
      if (!movie_id) return;
      async function fetchDetails() {
        setLoading(true);
        setDetail(null);
        setGenres([]);
        try {
          const data = await getMovieDetails(movie_id);
          setDetail(data);
          setGenres(data.genres ?? []);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      fetchDetails();
    },
    [movie_id],
  );

  return { detail, genres, loading, error };
}

export default useMovieDetails;
