import { useState } from "react";
import { getImageUrl } from "../../utils/image";
import styles from "./DrawerMoviesInfo.module.css";
import left from "../../assets/arrow-narrow-left.svg";
import right from "../../assets/arrow-narrow-right.svg";
import Button from "../Button/Button";
import useMovieProvider from "../../context/useMovieProvider";

function DrawerMoviesInfo({ arrayName, btnFunction }) {
  const { genres } = useMovieProvider();
  const [show, setShow] = useState(null);
  const getMovieGenres = (genreIds) => {
    return (
      genreIds
        ?.map((id) => genres?.data?.find((genre) => genre.id === id))
        .filter(Boolean) ?? []
    );
  };
  // TODO genres showing to be implemented
  return (
    <ul className={styles.pContent}>
      <Button onClick={btnFunction} className={styles.sliderBtn}>
        <img src={left} alt="left" />
      </Button>
      {arrayName.map((movie) => (
        <li
          key={movie.id}
          className={`${styles.pMovie} ${show ? styles.active : ""}`}
          onMouseOver={() => setShow(movie.id)}
          onMouseLeave={() => setShow(null)}
        >
          <img
            className={`${styles.moviesPoster} ${show ? styles.active : ""}`}
            src={getImageUrl(movie.poster_path, "w185")}
            alt={`${movie.name}poster`}
          />
          <div className={styles.genres}>
            {getMovieGenres(movie.genre_ids).map((genre) => (
              <span className={styles.genresName} key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>

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
