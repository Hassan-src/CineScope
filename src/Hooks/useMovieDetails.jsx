import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

function useMovieDetails(movie_id) {
  const [detail, setDetail] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      if (!movie_id) return;
      async function fetchDetails() {
        setLoading(true);
        const data = await getMovieDetails(movie_id);
        setDetail(data);
        setGenres(data.genres);
        setLoading(false);
      }
      fetchDetails();
    },
    [movie_id],
  );

  return { detail, genres, loading };
}

export default useMovieDetails;
