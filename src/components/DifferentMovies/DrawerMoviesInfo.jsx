import { useState } from "react";
import { getImageUrl } from "../../utils/image";
import styles from "./DrawerMoviesInfo.module.css";
function DrawerMoviesInfo({ arrayName }) {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow((show) => !show);
  }
  return (
    <div className={styles.pContent}>
      {arrayName.map((movie) => (
        <div className={`${styles.pMovie} ${show ? styles.active : ""}`}>
          <img
            src={getImageUrl(movie.poster_path, "w185")}
            alt={`${movie.name}poster`}
            onMouseEnter={handleShow}
          />
          {show && (
            <span>
              <h3 className={styles.movieTitle}>
                {movie.name || movie.title || movie.original_name}
              </h3>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default DrawerMoviesInfo;
