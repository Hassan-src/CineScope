import useMovieProvider from "../../context/useMovieProvider";
import CustomError from "../Error/CustomError";
import TitleSkeleton from "../Loading/Skeleton/Hero/TitleSkeleton";

import styles from "./MovieTitle.module.css";

function MovieTitle() {
  const { details, heroMovie } = useMovieProvider();
  if (details.loading) return <TitleSkeleton />;
  if (details.error) return <CustomError message={details.error} />;
  // Movie title from Tmdb api
  return (
    <h2 className={styles.title}>
      {heroMovie?.name || heroMovie?.title || heroMovie?.original_name}
    </h2>
  );
}
export default MovieTitle;
