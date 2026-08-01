import usePopularMovies from "../../Hooks/usePopularMovies";
import styles from "./MainMovies.module.css";
import MoviesDrawer from "./MoviesDrawer";
import DrawerTitle from "./DrawerTitle";
import DrawerMoviesInfo from "./DrawerMoviesInfo";
import { useState } from "react";
import useGetUpComing from "../../Hooks/useUpComingMovies";
function MainMovies() {
  const {
    popular,
    error: popularMoviesError,
    loading: popularMoviesLoading,
  } = usePopularMovies();
  const {
    upComing,
    error: topRatedError,
    loading: topRatedLoading,
  } = useGetUpComing();
  const [popularStartIndex, setPopularStartIndex] = useState(0);
  const [upComingStartIndex, setUpComingStartIndex] = useState(0);
  const popularMoviesSet = popular.slice(
    popularStartIndex,
    popularStartIndex + 7,
  );
  const upComingMoviesSet = upComing.slice(
    upComingStartIndex,
    upComingStartIndex + 7,
  );
  function handleSlidePopularBtn() {
    setPopularStartIndex((prev) => {
      const next = prev + 7;
      return next >= popular.length ? 0 : next;
    });
  }
  function handleSlideUpComingBtn() {
    setUpComingStartIndex((prev) => {
      const next = prev + 7;
      return next >= upComing.length ? 0 : next;
    });
  }
  return (
    <section className={styles.main}>
      <MoviesDrawer>
        <DrawerTitle>Popular</DrawerTitle>
        <DrawerMoviesInfo
          arrayName={popularMoviesSet}
          btnFunction={handleSlidePopularBtn}
        />
      </MoviesDrawer>
      <MoviesDrawer>
        <DrawerTitle>Upcoming</DrawerTitle>
        <DrawerMoviesInfo
          arrayName={upComingMoviesSet}
          btnFunction={handleSlideUpComingBtn}
        />
      </MoviesDrawer>
    </section>
  );
}

export default MainMovies;
