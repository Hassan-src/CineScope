import CustomError from "../Error/CustomError";
import DetailSkeleton from "../Loading/Skeleton/detailSkeleton";
import styles from "./MovieTitle.module.css";
function MovieTitle({ heroMovie, detailsLoading, detailsError }) {
  if (detailsLoading) return <DetailSkeleton />;
  if (detailsError) return <CustomError message={detailsError} />;
  // Movie title from Tmdb api
  return (
    <h2 className={styles.title}>
      {heroMovie.title || heroMovie.original_name}
    </h2>
  );
}
export default MovieTitle;
