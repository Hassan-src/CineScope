import { useState } from "react";
import useTrendingDaily from "../../Hooks/useTrendingDaily";
import styles from "./Hero.module.css";
import useMovieCredits from "../../Hooks/useMovieCredits";
import useMovieDetails from "../../Hooks/useMovieDetails";
import MovieDetails from "./MovieDetails";
import MovieTitle from "./MovieTitle";
import AboutList from "./AboutList";
import Casts from "./Casts";
import Overview from "./Overview";
import Ratings from "./Ratings";
import HeroPoster from "./HeroPoster";
import HeroBulletMenu from "./HeroBulletMenu";
import MoviesOptions from "./MoviesOptions";

function Hero() {
  // Getting the loading value and the API array from the custom hook
  const {
    loading: trendingDailyLoading,
    error: trendingDailyError,
    trendingDaily,
  } = useTrendingDaily();
  // Setting the starter movie (0 is the first element of the array)
  const [topMovie, setTopMovie] = useState(0);
  const heroMovie = trendingDaily.length > 0 ? trendingDaily[topMovie] : null;
  // Getting the cast for each movie with a custom hook
  // Each of the actors and directors are Arrays so we have to use map in jsx
  const {
    actors,
    directors,
    loading: creditsLoading,
    error: creditsError,
  } = useMovieCredits(heroMovie?.id);
  const {
    detail,
    genres,
    loading: detailsLoading,
    error: detailsError,
  } = useMovieDetails(heroMovie?.id);

  return (
    <div className={styles.hero}>
      {heroMovie && (
        <>
          <HeroPoster
            heroMovie={heroMovie}
            trendingDaily={trendingDaily}
            setTopMovie={setTopMovie}
            trendingDailyLoading={trendingDailyLoading}
            trendingDailyError={trendingDailyError}
          />
          <HeroBulletMenu
            heroMovie={heroMovie}
            trendingDaily={trendingDaily}
            trendingDailyLoading={trendingDailyLoading}
            trendingDailyError={trendingDailyError}
            setTopMovie={setTopMovie}
          />
          <div className={styles.about}>
            <>
              <MovieDetails
                heroMovie={heroMovie}
                detailsLoading={detailsLoading}
                detailsError={detailsError}
              >
                <MovieTitle
                  heroMovie={heroMovie}
                  detailsLoading={detailsLoading}
                  detailsError={detailsError}
                />
                <AboutList
                  heroMovie={heroMovie}
                  detail={detail}
                  genres={genres}
                  detailsLoading={detailsLoading}
                  detailsError={detailsError}
                />
                <Ratings detail={detail} detailsError={detailsError} />
                <Casts
                  actors={actors}
                  directors={directors}
                  creditsLoading={creditsLoading}
                  creditsError={creditsError}
                />
              </MovieDetails>
              <Overview>{heroMovie.overview}</Overview>
              <MoviesOptions heroMovie={heroMovie} />
            </>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
