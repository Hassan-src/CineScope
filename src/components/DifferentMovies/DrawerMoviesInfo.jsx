import { useState } from "react";
import { getImageUrl } from "../../utils/image";
import styles from "./DrawerMoviesInfo.module.css";
import left from "../../assets/arrow-narrow-left.svg";
import right from "../../assets/arrow-narrow-right.svg";
import Button from "../Button/Button";
function DrawerMoviesInfo({ arrayName, btnFunction }) {
  const [show, setShow] = useState(false);
  return (
    <ul className={styles.pContent}>
      <Button onClick={btnFunction} className={styles.sliderBtn}>
        <img src={left} alt="left" />
      </Button>
      {arrayName.map((movie) => (
        <li
          key={movie.id}
          className={`${styles.pMovie} ${show ? styles.active : ""}`}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <img
            key={movie.id}
            className={`${styles.moviesPoster} ${show ? styles.active : ""}`}
            src={getImageUrl(movie.poster_path, "w185")}
            alt={`${movie.name}poster`}
          />
          <span>
            <h3 className={styles.movieTitle}>
              {movie.name || movie.title || movie.original_name}
            </h3>
          </span>
        </li>
      ))}
      <Button onClick={btnFunction} className={styles.sliderBtn}>
        <img src={right} alt="right" />
      </Button>
    </ul>
  );
}

export default DrawerMoviesInfo;
