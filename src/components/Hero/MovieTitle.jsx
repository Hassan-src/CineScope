import CustomError from "../Error/CustomError";
import TitleSkeleton from "../Loading/Skeleton/Hero/TitleSkeleton";
import styles from "./MovieTitle.module.css";
function MovieTitle({ heroMovie, detailsLoading, detailsError }) {
  if (detailsLoading) return <TitleSkeleton />;
  if (detailsError) return <CustomError message={detailsError} />;
  // Movie title from Tmdb api
  return (
    <h2 className={styles.title}>
      {heroMovie.name || heroMovie.title || heroMovie.original_name}
    </h2>
  );
}
export default MovieTitle;
