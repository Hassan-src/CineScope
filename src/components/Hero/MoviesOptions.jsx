import { useState } from "react";
import Button from "../Button/Button";
import TrailerModal from "../TrailerModal/TrailerModal";
import styles from "./MoviesOptions.module.css";
import useMovieTrailer from "../../Hooks/useMovieTrailer";
import logo from "../../assets/Bookmark.svg";
function MoviesOptions({ heroMovie }) {
  const [show, setShow] = useState(false);
  const {
    trailer,
    loading: trailerLoading,
    error: trailerError,
  } = useMovieTrailer(heroMovie?.id);
  function handleTrailerBtn() {
    if (trailerError) return setShow(false);
    setShow((show) => !show);
  }
  if (trailerLoading) return;
  return (
    <div className={styles.btnInfo}>
      <Button
        className={`${trailerError ? styles.noTrailer : styles.btnTrailer}`}
        onClick={handleTrailerBtn}
      >
        {trailerError ? "Trailer not available" : "Watch Trailer"}
      </Button>
      {trailer && show && (
        <TrailerModal
          onClick={handleTrailerBtn}
          title={trailer.name}
          movieKey={trailer.key}
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
