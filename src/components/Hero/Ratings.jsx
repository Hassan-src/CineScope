import styles from "./Ratings.module.css";
import useImdbRating from "../../Hooks/useImdbRating";
import RatingSkeleton from "../Loading/Skeleton/Hero/RatingSkeleton";
import CustomError from "../Error/CustomError";
function Ratings({ detail, detailsError }) {
  // Showing the movie ratings from Omdb api
  const {
    loading: imdbRatingLoading,
    imdbRate,
    rottenTomato,
  } = useImdbRating(detail?.imdb_id);
  if (imdbRatingLoading) return <RatingSkeleton />;
  if (detailsError) return <CustomError message={detailsError} />;
  return (
    <>
      <ul className={styles.ratings}>
        <li className={styles.rate}>
          <img
            className={styles.ratingImg}
            src="src/assets/svgs/imdb.svg"
            alt="imdb logo"
          />
          {imdbRate === "N/A" ? "-" : imdbRate}
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
    </>
  );
}

export default Ratings;
