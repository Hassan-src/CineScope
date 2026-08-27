import { useEffect, useState } from "react";
import MoviesDrawer from "./MoviesDrawer";
import DrawerTitle from "./DrawerTitle";
import DrawerMoviesInfo from "./DrawerMoviesInfo";
import useMovieProvider from "../../context/useMovieProvider";

import styles from "./MainMovies.module.css";

function MainMovies() {
  function getMoviesPerSlide() {
    const width = window.innerWidth;
    if (width <= 1500) return 6;
    if (width <= 1300) return 5;
    if (width <= 1100) return 4;
    if (width <= 900) return 3;
    if (width <= 600) return 2;
    return 7;
  }
  const { popularMovies, upComingMovies } = useMovieProvider();
  const [moviesPerSlide, setMoviesPerSlide] = useState(getMoviesPerSlide());
  const [popularStartIndex, setPopularStartIndex] = useState(0);
  const [upComingStartIndex, setUpComingStartIndex] = useState(0);
  useEffect(() => {
    function handleResize() {
      setMoviesPerSlide(getMoviesPerSlide());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const popularMoviesSet = popularMovies?.data.slice(
    popularStartIndex,
    popularStartIndex + moviesPerSlide,
  );
  const upComingMoviesSet = upComingMovies?.data.slice(
    upComingStartIndex,
    upComingStartIndex + moviesPerSlide,
  );
  function handleSlidePopularBtn() {
    setPopularStartIndex((prev) => {
      const next = prev + moviesPerSlide;
      return next >= popularMovies?.data.length ? 0 : next;
    });
  }
  function handleSlideUpComingBtn() {
    setUpComingStartIndex((prev) => {
      const next = prev + moviesPerSlide;
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
