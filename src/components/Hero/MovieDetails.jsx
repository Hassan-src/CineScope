import useMovieProvider from "../../context/useMovieProvider";
import { getImageUrl } from "../../utils/image";
import CustomError from "../Error/CustomError";
import InfoSkeleton from "../Loading/Skeleton/Hero/InfoSkeleton";

import styles from "./MovieDetails.module.css";

function MovieDetails({ children }) {
  const { heroMovie, details } = useMovieProvider();
  if (details.loading) return <InfoSkeleton />;
  if (details.error) return <CustomError message={details.error} />;
  return (
    <div className={styles.movieDetail}>
      <img
        className={styles.moviePoster}
        src={getImageUrl(heroMovie?.poster_path, "w500")}
        alt={`${heroMovie?.original_title} poster`}
      />
      <div className={styles.description}>{children}</div>
    </div>
  );
}

export default MovieDetails;
