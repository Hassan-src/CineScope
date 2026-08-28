import useMovieProvider from "../../context/useMovieProvider";
import { getImageUrl } from "../../utils/image";
import Button from "../Button/Button";
import TextExpander from "../TextExpander/textExpander";

import styles from "./BookmarkMovies.module.css";

import DummyPoster from "../../assets/DummyPoster.avif";
import BookmarkEmpty from "./BookmarkEmpty";

function BookmarkMovies() {
  const { bookmarks, setBookmarks } = useMovieProvider();
  function handleDeleteBtn(id) {
    setBookmarks((movies) => movies.filter((movie) => movie.id !== id));
  }
  return (
    <div className={styles.main}>
      {bookmarks.length !== 0 ? (
        bookmarks.map((movies) => (
          <div key={movies.id}>
            <div className={styles.mainCard}>
              <img
                className={styles.posterImg}
                src={
                  movies.poster_path
                    ? getImageUrl(movies.poster_path, "w185")
                    : DummyPoster
                }
                alt={`${movies.title} poster`}
              />
              <div className={styles.moviesInfo}>
                <h1 className={styles.movieTitle}>{movies.title}</h1>
                <p className={styles.releaseDate}>{movies.release_date}</p>
                <TextExpander
                  collapsedNumWords={25}
                  expandButtonText="more"
                  collapseButtonText="less"
                  buttonColor="#3b82f6"
                  expanded={false}
                  className={styles.btnExp}
                >
                  {movies.overview}
                </TextExpander>
              </div>
              <Button
                className={styles.deleteBtn}
                onClick={() => handleDeleteBtn(movies.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <BookmarkEmpty />
      )}
    </div>
  );
}

export default BookmarkMovies;
