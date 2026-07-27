import { useState } from "react";
import useTrendingDaily from "../../Hooks/useTrendingDaily";
import { getImageUrl } from "../../utils/image";
import Button from "../Button/Button";
import styles from "./Hero.module.css";
import useMovieCredits from "../../Hooks/useMovieCredits";
import useMovieDetails from "../../Hooks/useMovieDetails";
import TextExpander from "../TextExpander/textExpander";

function Hero() {
  // Getting the loading value and the API array from the custom hook
  const { loading, trendingDaily } = useTrendingDaily();
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
  const { detail, loading: detailsLoading } = useMovieDetails(heroMovie?.id);
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
  if (loading || !heroMovie) {
    return <div>Loading...</div>;
  }
  console.log(trendingDaily, actors, detail);
  // TODO 1.fix the detail background and the showing of it 2.manage the text expander 3.make the bullet point for the number of slides in hero 4.Get the imdb rating from OmdbApi 5.fix the gradient so it blends with the other sections.
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
            className={styles.backPoster}
            // The w is set according to the API documentation for images
            src={getImageUrl(heroMovie.backdrop_path, "original")}
            alt={`${heroMovie.original_title} poster`}
          />
          <Button className={styles.rightBtn} onClick={handleRightBtn}>
            <img
              className={styles.arrow}
              src="src/assets/svgs/arrow-narrow-right.svg"
              alt="left button"
            />
          </Button>
          <div className={styles.movieDetail}>
            <img
              className={styles.moviePoster}
              src={getImageUrl(heroMovie.poster_path, "original")}
              alt={`${heroMovie.original_title} poster`}
            />
            <div className={styles.description}>
              <h2 className={styles.title}>
                {heroMovie.original_title || heroMovie.original_name}
              </h2>
              <ul className={styles.detailList}>
                <li className={styles.smallDet}>
                  <img
                    className={styles.heroImages}
                    src="src/assets/svgs/Date.svg"
                    alt="date"
                  />
                  {heroMovie.release_date || heroMovie.first_air_date}
                </li>
                <li className={styles.smallDet}>
                  <img
                    className={styles.heroImages}
                    src="src/assets/svgs/Rate.svg"
                    alt=""
                  />
                  TMDB: {Math.trunc(heroMovie.vote_average)}
                </li>
                <li className={styles.smallDet}>
                  <img
                    className={styles.heroImages}
                    src="src/assets/svgs/Duration.svg"
                    alt=""
                  />
                  {detail.runtime}min
                </li>
              </ul>
              <p>
                <span className={styles.casts}>Casts:</span>{" "}
                {actors.map((actor) => actor.name).join("- ")}
              </p>
              <p>Directors: {directors.map((dir) => dir.name).join(", ")}</p>
              <p className={styles.summary}>
                <TextExpander
                  collapsedNumWords={15}
                  expandButtonText="more"
                  collapseButtonText="less"
                  buttonColor="#3b82f6"
                  expanded={false}
                >
                  {heroMovie.overview}
                </TextExpander>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
