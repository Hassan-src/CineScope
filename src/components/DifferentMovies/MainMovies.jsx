import { useState } from "react";
import MoviesDrawer from "./MoviesDrawer";
import DrawerTitle from "./DrawerTitle";
import DrawerMoviesInfo from "./DrawerMoviesInfo";
import useMovieProvider from "../../context/useMovieProvider";

import styles from "./MainMovies.module.css";

function MainMovies() {
  const { popularMovies, upComingMovies } = useMovieProvider();

  const [popularStartIndex, setPopularStartIndex] = useState(0);
  const [upComingStartIndex, setUpComingStartIndex] = useState(0);
  const popularMoviesSet = popularMovies?.data.slice(
    popularStartIndex,
    popularStartIndex + 7,
  );
  const upComingMoviesSet = upComingMovies?.data.slice(
    upComingStartIndex,
    upComingStartIndex + 7,
  );
  function handleSlidePopularBtn() {
    setPopularStartIndex((prev) => {
      const next = prev + 7;
      return next >= popularMovies?.data.length ? 0 : next;
    });
  }
  function handleSlideUpComingBtn() {
    setUpComingStartIndex((prev) => {
      const next = prev + 7;
      return next >= upComingMovies?.data.length ? 0 : next;
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
