import { useState } from "react";
import Button from "../Button/Button";
import TrailerModal from "../TrailerModal/TrailerModal";
import useMovieProvider from "../../context/useMovieProvider";

import styles from "./MoviesOptions.module.css";
import logo from "../../assets/Bookmark.svg";

function MoviesOptions() {
  const { trailer } = useMovieProvider();
  const [show, setShow] = useState(false);
  function handleTrailerBtn() {
    if (trailer.error) return setShow(false);
    setShow((show) => !show);
  }
  if (trailer.loading) return;
  return (
    <div className={styles.btnInfo}>
      <Button
        className={`${trailer.error ? styles.noTrailer : styles.btnTrailer}`}
        onClick={handleTrailerBtn}
      >
        {trailer.error ? "Trailer not available" : "Watch Trailer"}
      </Button>
      {trailer && show && (
        <TrailerModal
          onClick={handleTrailerBtn}
          title={trailer.data.name}
          movieKey={trailer.data.key}
          className={styles.active}
        />
      )}
      <Button className={styles.btnBookmark}>
        <img src={logo} alt="bookmark" />
        Mylist
      </Button>
    </div>
  );
}

export default MoviesOptions;
