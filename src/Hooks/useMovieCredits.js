import { useEffect, useState } from "react";
import { getCredits } from "../services/api";

function useMovieCredits(movie_id) {
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {
      // Chceking for the passed id so that the function does not return undefined
      if (!movie_id) return;
      async function fetchCredits() {
        setLoading(true);
        setActors([]);
        setDirectors([]);
        try {
          const data = await getCredits(movie_id);
          const actorsInfo = data.cast.slice(0, 5);
          const directorsInfo = data.crew
            .filter((dir) => dir.department === "Directing")
            .slice(0, 3);
          setActors(actorsInfo);
          setDirectors(directorsInfo);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      fetchCredits();
    },
    [movie_id],
  );
  return { actors, directors, loading, error };
}

export default useMovieCredits;
