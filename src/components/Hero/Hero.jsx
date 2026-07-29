import { useState } from "react";
import useTrendingDaily from "../../Hooks/useTrendingDaily";
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
import HeroPoster from "./HeroPoster";
import HeroBulletMenu from "./HeroBulletMenu";

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
  // TODO fix the skeleton loading for each component 2. fetch the trailer and play it
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
                <DetailsList
                  heroMovie={heroMovie}
                  detail={detail}
                  genres={genres}
                  detailsLoading={detailsLoading}
                  detailsError={detailsError}
                />
                <Ratings
                  detail={detail}
                  detailsLoading={detailsLoading}
                  detailsError={detailsError}
                />
                <Casts
                  actors={actors}
                  directors={directors}
                  creditsLoading={creditsLoading}
                  creditsError={creditsError}
                />
              </MovieDetails>
              <Overview>{heroMovie.overview}</Overview>
              <div className={styles.btnInfo}>
                <Button className={styles.btnTrailer}>Watch Trailer</Button>
                <Button className={styles.btnBookmark}>
                  <img src="src/assets/svgs/bookmark.svg" alt="bookmark" />
                  Mylist
                </Button>
              </div>
            </>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
