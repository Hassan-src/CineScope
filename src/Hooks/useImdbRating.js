import { useEffect, useState } from "react";
import { getImdbRating } from "../services/api";

function useImdbRating(imdb_id) {
  const [imdbRate, setImdbRate] = useState("");
  const [rottenTomato, setRottenTomato] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {
      if (!imdb_id) return;
      async function Rating() {
        setImdbRate("");
        setRottenTomato("");
        setError(null);
        setLoading(true);
        try {
          const data = await getImdbRating(imdb_id);
          // Checking if imdb rate exist
          const imdbRating = data.imdbRating ?? "";
          // Cheking if the ratings exist then if rottenTomatos exist and if it doesn't have a value simply set it to "-"
          const rottenTomatoesRating =
            data.Ratings?.find((rating) => rating.Source === "Rotten Tomatoes")
              ?.Value ?? " - ";
          // Setting the data
          setImdbRate(imdbRating);
          setRottenTomato(rottenTomatoesRating);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      Rating();
    },
    [imdb_id],
  );
  return { imdbRate, rottenTomato, loading, error };
}

export default useImdbRating;
