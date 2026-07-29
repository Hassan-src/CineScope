import styles from "./Ratings.module.css";
import useImdbRating from "../../Hooks/useImdbRating";
import RatingSkeleton from "../Loading/Skeleton/RatingSkeleton";
import DetailSkeleton from "../Loading/Skeleton/detailSkeleton";
import CustomError from "../Error/CustomError";
function Ratings({ detail, detailsLoading, detailsError }) {
  // Showing the movie ratings from Omdb api
  const {
    loading: imdbRatingLoading,
    imdbRate,
    rottenTomato,
  } = useImdbRating(detail?.imdb_id);
  if (detailsLoading) return <DetailSkeleton />;
  if (detailsError) return <CustomError message={detailsError} />;
  return (
    <>
      {imdbRatingLoading ? (
        <RatingSkeleton />
      ) : (
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
      )}
    </>
  );
}

export default Ratings;
