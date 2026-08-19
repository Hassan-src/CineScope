import CustomError from "../Error/CustomError";
import AboutSkeleton from "../Loading/Skeleton/Hero/AboutSkeleton";
import useMovieProvider from "../../context/useMovieProvider";

import styles from "./AboutList.module.css";

import Date from "../../assets/Date.svg";
import Duration from "../../assets/Duration.svg";
import camcorder from "../../assets/camcorder.svg";

function AboutList() {
  const { heroMovie, details } = useMovieProvider();
  if (details.loading) return <AboutSkeleton />;
  if (details.error) return <CustomError message={details.error} />;
  // Including the runtime, release date and genre from Tmdb api
  return (
    <ul className={styles.detailList}>
      <li className={styles.smallDet}>
        <img className={styles.detailImages} src={Date} alt="date" />
        {heroMovie?.release_date || heroMovie?.first_air_date}
      </li>
      <li className={styles.smallDet}>
        <img className={styles.detailImages} src={Duration} alt="" />
        {details?.data?.runtime}min
      </li>
      <li className={styles.smallDet}>
        <img className={styles.detailImages} src={camcorder} alt="Genre" />
        {details?.data?.genres.slice(0, 3).map((genre) => (
          <span key={genre.id} className={styles.genre}>
            {genre?.name}
          </span>
        ))}
      </li>
    </ul>
  );
}

export default AboutList;
