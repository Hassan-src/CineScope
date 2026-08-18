import MovieDetails from "./MovieDetails";
import MovieTitle from "./MovieTitle";
import AboutList from "./AboutList";
import Casts from "./Casts";
import Overview from "./Overview";
import Ratings from "./Ratings";
import HeroPoster from "./HeroPoster";
import HeroBulletMenu from "./HeroBulletMenu";
import MoviesOptions from "./MoviesOptions";
import useMovieProvider from "../../context/useMovieProvider";

import styles from "./Hero.module.css";

function Hero() {
  const { heroMovie } = useMovieProvider();
  return (
    <div className={styles.hero}>
      {heroMovie && (
        <>
          <HeroPoster />
          <HeroBulletMenu />
          <div className={styles.about} key={heroMovie.id}>
            <>
              <MovieDetails>
                <MovieTitle />
                <AboutList />
                <Ratings />
                <Casts />
              </MovieDetails>
              <Overview>{heroMovie.overview}</Overview>
              <MoviesOptions />
            </>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
