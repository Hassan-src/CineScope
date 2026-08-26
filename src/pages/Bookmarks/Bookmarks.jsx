import BookmarkMovies from "../../components/Bookmark/BookmarkMovies";
import Header from "../../components/Header/Header";
import styles from "./Bookmarks.module.css";
function Bookmarks() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <BookmarkMovies />
      </div>
    </>
  );
}

export default Bookmarks;
