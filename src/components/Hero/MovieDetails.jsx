import { getImageUrl } from "../../utils/image";
import styles from "./MovieDetails.module.css";
function MovieDetails({ children, heroMovie }) {
  return (
    <div className={styles.movieDetail}>
      <img
        className={styles.moviePoster}
        src={getImageUrl(heroMovie.poster_path, "original")}
        alt={`${heroMovie.original_title} poster`}
      />
      <div className={styles.description}>{children}</div>
    </div>
  );
}

export default MovieDetails;
