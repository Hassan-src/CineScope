import styles from "./MovieTitle.module.css";
function MovieTitle({ heroMovie }) {
  // Movie title from Tmdb api
  return (
    <h2 className={styles.title}>
      {heroMovie.original_title || heroMovie.original_name}
    </h2>
  );
}
export default MovieTitle;
