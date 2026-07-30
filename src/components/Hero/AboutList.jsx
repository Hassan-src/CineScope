import CustomError from "../Error/CustomError";
import AboutSkeleton from "../Loading/Skeleton/Hero/AboutSkeleton";
import styles from "./AboutList.module.css";
function AboutList({
  heroMovie,
  detail,
  genres,
  detailsLoading,
  detailsError,
}) {
  if (detailsLoading) return <AboutSkeleton />;
  if (detailsError) return <CustomError message={detailsError} />;
  // Including the runtime, release date and genre from Tmdb api
  return (
    <ul className={styles.detailList}>
      <li className={styles.smallDet}>
        <img
          className={styles.detailImages}
          src="src/assets/svgs/Date.svg"
          alt="date"
        />
        {heroMovie?.release_date || heroMovie?.first_air_date}
      </li>
      <li className={styles.smallDet}>
        <img
          className={styles.detailImages}
          src="src/assets/svgs/Duration.svg"
          alt=""
        />
        {detail?.runtime}min
      </li>
      <li className={styles.smallDet}>
        <img
          className={styles.detailImages}
          src="src/assets/svgs/camcorder.svg"
          alt="Genre"
        />
        {genres.map((genre) => (
          <span key={genre.id} className={styles.genre}>
            {genre?.name}
          </span>
        ))}
      </li>
    </ul>
  );
}

export default AboutList;
