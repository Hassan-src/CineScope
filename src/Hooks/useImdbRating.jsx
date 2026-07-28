import { useEffect, useState } from "react";
import { getImdbRating } from "../services/api";

function useImdbRating(imdb_id) {
  const [imdbRate, setImdbRate] = useState("");
  const [rottenTomato, setRottenTomato] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      if (!imdb_id) return;
      async function Rating() {
        setLoading(true);
        const data = await getImdbRating(imdb_id);
        // Checking if imdb rate exist
        setImdbRate(data.imdbRating ?? " - ");
        // Cheking if the ratings exist then if rottenTomatos exist and if it doesn't have a value simply set it to "-"
        setRottenTomato(
          data.Ratings?.find((rating) => rating.Source === "Rotten Tomatoes")
            ?.Value ?? " - ",
        );
        setLoading(false);
      }
      Rating();
    },
    [imdb_id],
  );
  return { imdbRate, rottenTomato, loading };
}

export default useImdbRating;
