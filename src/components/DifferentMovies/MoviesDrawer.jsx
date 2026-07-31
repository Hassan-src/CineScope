import styles from "./MoviesDrawer.module.css";
function MoviesDrawer({ children }) {
  return <div className={styles.popularMovies}>{children}</div>;
}

export default MoviesDrawer;
