import BookmarkMovies from "../../components/Bookmark/BookmarkMovies";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import styles from "./Bookmarks.module.css";
function Bookmarks() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <SideBar />
        <BookmarkMovies />
      </div>
    </>
  );
}

export default Bookmarks;
