import styles from "./Ratings.module.css";
import useImdbRating from "../../Hooks/useImdbRating";
import RatingSkeleton from "../Loading/Skeleton/Hero/RatingSkeleton";
import CustomError from "../Error/CustomError";
import imdb from "../../assets/imdb.svg";
import tomato from "../../assets/tomato.svg";
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
          <img className={styles.ratingImg} src={imdb} alt="imdb logo" />
          {imdbRate === "N/A" ? "-" : imdbRate}
        </li>
        <li className={styles.rate}>
          <img className={styles.ratingImg} src={tomato} alt="imdb logo" />
          {rottenTomato}
        </li>
      </ul>
    </>
  );
}

export default Ratings;
