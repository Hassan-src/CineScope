import styles from "./Ratings.module.css";
import useImdbRating from "../../Hooks/useImdbRating";
function Ratings({ detail }) {
  // Showing the movie ratings from Omdb api
  const {
    loading: imdbRatingLoading,
    imdbRate,
    rottenTomato,
  } = useImdbRating(detail?.imdb_id);
  return (
    <ul className={styles.ratings}>
      <li className={styles.rate}>
        <img
          className={styles.ratingImg}
          src="src/assets/svgs/imdb.svg"
          alt="imdb logo"
        />
        {imdbRate === "N/A" ? "-" : imdbRate}
        <span className={styles.rateTotal}>
          {imdbRate === "N/A" ? "-" : ""}
        </span>
      </li>
      <li className={styles.rate}>
        <img
          className={styles.ratingImg}
          src="src/assets/svgs/tomato.svg"
          alt="imdb logo"
        />
        {rottenTomato}
      </li>
    </ul>
  );
}

export default Ratings;
