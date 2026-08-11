import { useEffect, useState } from "react";
import { getMovieTrailer } from "../services/api";

function useMovieTrailer(movie_id) {
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(
    function () {
      if (!movie_id) return;
      async function trailer() {
        setTrailer(null);
        setError(null);
        setLoading(true);
        try {
          const data = await getMovieTrailer(movie_id);
          const officialTrailer =
            data.results.find(
              (video) =>
                video.site === "YouTube" &&
                video.type === "Trailer" &&
                video.official,
            ) ??
            data.results.find(
              (video) => video.site === "YouTube" && video.type === "Trailer",
            );
          if (!officialTrailer)
            throw new Error("No official trailer available for this movie!");
          setTrailer(officialTrailer ?? null);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      trailer();
    },
    [movie_id],
  );
  return { trailer, loading, error };
}

export default useMovieTrailer;
