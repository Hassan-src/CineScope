import { useState } from "react";
import useTrendingDaily from "../../Hooks/useTrendingDaily";
import { getImageUrl } from "../../utils/image";
import Button from "../Button/Button";
import styles from "./Hero.module.css";
import useMovieCredits from "../../Hooks/useMovieCredits";
import useMovieDetails from "../../Hooks/useMovieDetails";
import MovieDetails from "./MovieDetails";
import MovieTitle from "./MovieTitle";
import DetailsList from "./DetailsList";
import Casts from "./Casts";
import Overview from "./Overview";
import Ratings from "./Ratings";

function Hero() {
  // Getting the loading value and the API array from the custom hook
  const { loading: trendingDailyLoading, trendingDaily } = useTrendingDaily();
  // Setting the starter movie (0 is the first element of the array)
  const [topMovie, setTopMovie] = useState(0);
  const heroMovie = trendingDaily.length > 0 ? trendingDaily[topMovie] : null;
  // Getting the cast for each movie with a custom hook
  // Each of the actors and directors are Arrays so we have to use map in jsx
  const {
    actors,
    directors,
    loading: creditsLoading,
  } = useMovieCredits(heroMovie?.id);
  const {
    detail,
    genres,
    loading: detailsLoading,
  } = useMovieDetails(heroMovie?.id);

  // Updating the index using the modular formula e.g: (0-1) % 5 = -1 => -1 + 5 = 4 => 4 % 5 = 4
  function handleLeftBtn() {
    setTopMovie(
      (topMov) =>
        (((topMov - 1) % trendingDaily.length) + trendingDaily.length) %
        trendingDaily.length,
    );
  }
  function handleRightBtn() {
    setTopMovie(
      (topMov) =>
        (((topMov + 1) % trendingDaily.length) + trendingDaily.length) %
        trendingDaily.length,
    );
  }
  if (trendingDailyLoading || !heroMovie || detailsLoading) {
    return <div>Loading...</div>;
  }
  console.log(detail);
  // TODO  3.make the bullet point for the number of slides in hero 4.Get the imdb rating from OmdbApi
  return (
    <div className={styles.hero}>
      {heroMovie && (
        <>
          <Button className={styles.leftBtn} onClick={handleLeftBtn}>
            <img
              className={styles.arrow}
              src="src/assets/svgs/arrow-narrow-left.svg"
              alt="left button"
            />
          </Button>
          <img
            // The size is set according to the API documentation for images
            src={getImageUrl(heroMovie.backdrop_path, "original")}
            className={styles.backPoster}
            alt={`${heroMovie.original_title} poster`}
          />
          <Button className={styles.rightBtn} onClick={handleRightBtn}>
            <img
              className={styles.arrow}
              src="src/assets/svgs/arrow-narrow-right.svg"
              alt="left button"
            />
          </Button>
          <div className={styles.about}>
            <MovieDetails heroMovie={heroMovie}>
              <MovieTitle heroMovie={heroMovie} />
              <DetailsList
                heroMovie={heroMovie}
                detail={detail}
                genres={genres}
              />
              <Ratings detail={detail} />
              <Casts actors={actors} directors={directors} />
            </MovieDetails>
            <Overview>{heroMovie.overview}</Overview>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
