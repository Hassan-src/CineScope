import Button from "../Button/Button";
import useMovieProvider from "../../context/useMovieProvider";

import styles from "./searchbox.module.css";

function SearchBox() {
  const { setSearchBox } = useMovieProvider();
  return (
    <div className={styles.main}>
      <div className={styles.searchbox}>
        <Button
          className={styles.searchButton}
          onClick={() => setSearchBox((s) => !s)}
        >
          &times;
        </Button>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBox;
