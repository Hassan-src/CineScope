import { useState } from "react";
import { getImageUrl } from "../../utils/image";
import useMovieProvider from "../../context/useMovieProvider";
import Button from "../Button/Button";

import styles from "./DrawerMoviesInfo.module.css";

import left from "../../assets/arrow-narrow-left.svg";
import right from "../../assets/arrow-narrow-right.svg";
import bookmarkLogo from "../../assets/Bookmark.svg";
import DummyPoster from "../../assets/DummyPoster.avif";

function DrawerMoviesInfo({ arrayName, btnFunction }) {
  const { genres, bookmarksMovieIds, handleBookMarkBtn } = useMovieProvider();
  const [show, setShow] = useState(null);
  const getMovieGenres = (genreIds) => {
    return (
      genreIds
        ?.map((id) => genres?.data?.find((genre) => genre.id === id))
        .filter(Boolean) ?? []
    );
  };
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
          <div className={styles.genres}>
            <img
              className={`${styles.moviesPoster} ${show ? styles.active : ""}`}
              src={
                movie.poster_path
                  ? getImageUrl(movie.poster_path, "w185")
                  : DummyPoster
              }
              alt={`${movie.name}poster`}
            />
            <Button
              className={`${styles.btnBookmark} ${bookmarksMovieIds.includes(movie.id) ? styles.btnBookmarkActive : ""}`}
              onClick={() => handleBookMarkBtn(movie)}
            >
              <img
                className={styles.bookmarkLogo}
                src={bookmarkLogo}
                alt="bookmark"
              />
            </Button>
            <ul className={styles.genresNameList}>
              {getMovieGenres(movie.genre_ids)
                .slice(0, 3)
                .map((genre) => (
                  <li
                    className={`${styles.genresName} ${show ? styles.active : ""}`}
                    key={genre.id}
                  >
                    <span className={styles.genresText}>{genre.name}</span>
                  </li>
                ))}
            </ul>
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
