import { useEffect, useState } from "react";
import { getCredits } from "../services/api";

function useMovieCredits(movie_id) {
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      // Chceking for the passed id so that the function does not return undefined
      if (!movie_id) return;
      async function fetchCredits() {
        setLoading(true);
        const data = await getCredits(movie_id);
        setActors(data.cast.slice(0, 5));
        setDirectors(
          data.crew.filter((dir) => dir.department === "Directing").slice(0, 3),
        );
        setLoading(false);
      }
      fetchCredits();
    },
    [movie_id],
  );
  return { actors, directors, loading };
}

export default useMovieCredits;
