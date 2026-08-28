import { useEffect, useState } from "react";
import useMovieProvider from "../../context/useMovieProvider";
import DrawerMoviesInfo from "../DifferentMovies/DrawerMoviesInfo";
import DrawerTitle from "../DifferentMovies/DrawerTitle";
import MoviesDrawer from "../DifferentMovies/MoviesDrawer";
import styles from "./MainTvSeries.module.css";

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
  const [moviesPerSlide, setMoviesPerSlide] = useState(getMoviesPerSlide());
  const { tvpopular, tvTopRated } = useMovieProvider();
  const [tvPopularStarterIndex, setTvPopularStarterIndex] = useState(0);
  const popularSeriesSet = tvpopular?.data.slice(
    tvPopularStarterIndex,
    tvPopularStarterIndex + moviesPerSlide,
  );
  const [tvTopRatedStarterIndex, setTvTopRatedStarterIndex] = useState(0);
  const topRatedSeriesSet = tvTopRated?.data.slice(
    tvTopRatedStarterIndex,
    tvTopRatedStarterIndex + moviesPerSlide,
  );
  useEffect(() => {
    function handleResize() {
      setMoviesPerSlide(getMoviesPerSlide());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function handleSlidePopularBtn() {
    setTvPopularStarterIndex((prev) => {
      const next = prev + moviesPerSlide;
      return next >= tvpopular?.data.length ? 0 : next;
    });
  }
  function handleSlideTopRatedBtn() {
    setTvTopRatedStarterIndex((prev) => {
      const next = prev + moviesPerSlide;
      return next >= tvTopRated?.data.length ? 0 : next;
    });
  }

  console.log(tvpopular);
  return (
    <section className={styles.main}>
      <MoviesDrawer>
        <DrawerTitle>Popular</DrawerTitle>
        <DrawerMoviesInfo
          arrayName={popularSeriesSet}
          btnFunction={handleSlidePopularBtn}
        />
      </MoviesDrawer>
      <MoviesDrawer>
        <DrawerTitle>Top Rated</DrawerTitle>
        <DrawerMoviesInfo
          arrayName={topRatedSeriesSet}
          btnFunction={handleSlideTopRatedBtn}
        />
      </MoviesDrawer>
    </section>
  );
}

export default MainMovies;
