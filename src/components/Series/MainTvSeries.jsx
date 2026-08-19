import { useState } from "react";
import useMovieProvider from "../../context/useMovieProvider";
import DrawerMoviesInfo from "../DifferentMovies/DrawerMoviesInfo";
import DrawerTitle from "../DifferentMovies/DrawerTitle";
import MoviesDrawer from "../DifferentMovies/MoviesDrawer";
import styles from "./MainTvSeries.module.css";

function MainMovies() {
  const { tvpopular, tvTopRated } = useMovieProvider();
  const [tvPopularStarterIndex, setTvPopularStarterIndex] = useState(0);
  const popularSeriesSet = tvpopular?.data.slice(
    tvPopularStarterIndex,
    tvPopularStarterIndex + 7,
  );
  const [tvTopRatedStarterIndex, setTvTopRatedStarterIndex] = useState(0);
  const topRatedSeriesSet = tvTopRated?.data.slice(
    tvTopRatedStarterIndex,
    tvTopRatedStarterIndex + 7,
  );
  function handleSlidePopularBtn() {
    setTvPopularStarterIndex((prev) => {
      const next = prev + 7;
      return next >= tvpopular?.data.length ? 0 : next;
    });
  }
  function handleSlideTopRatedBtn() {
    setTvTopRatedStarterIndex((prev) => {
      const next = prev + 7;
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
