import usePopularMovies from "../../Hooks/usePopularMovies";
import styles from "./MainMovies.module.css";
import MoviesDrawer from "./MoviesDrawer";
import DrawerTitle from "./DrawerTitle";
import DrawerMoviesInfo from "./DrawerMoviesInfo";
function MainMovies() {
  const {
    popular,
    error: popularMoviesError,
    loading: popularMoviesLoading,
  } = usePopularMovies();
  console.log(popular);
  return (
    <section className={styles.main}>
      <MoviesDrawer>
        <DrawerTitle>Popular</DrawerTitle>
        <DrawerMoviesInfo arrayName={popular} />
      </MoviesDrawer>
      <MoviesDrawer>
        <DrawerTitle>Popular</DrawerTitle>
        <DrawerMoviesInfo arrayName={popular} />
      </MoviesDrawer>
    </section>
  );
}

export default MainMovies;
