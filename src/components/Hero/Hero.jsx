import { useState } from "react";
import useTrendingDaily from "../../Hooks/useTrendingDaily";
import { getImageUrl } from "../../utils/image";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

function Hero() {
  const { isLoading, trendingDaily } = useTrendingDaily();
  const [topMovie, setTopMovie] = useState(0);
  const starterMovie = trendingDaily[topMovie];
  return (
    <div className={styles.hero}>
      {starterMovie && (
        <>
          <Button className={styles.leftBtn}>
            <img
              src="src/assets/svgs/arrow-narrow-left.svg"
              alt="left button"
            />
          </Button>
          <img
            key={starterMovie.id}
            className={styles.backPoster}
            src={getImageUrl(starterMovie.backdrop_path)}
            alt={`${starterMovie.original_title} poster`}
          />
          <Button className={styles.rightBtn}>
            <img src="src/assets/svgs/Arrow-right.svg" alt="left button" />
          </Button>
        </>
      )}
      {/* <div className={styles.heroContent}>
        <img src={image.Poster} alt="" />
        <h1>{image.Title}</h1>
        <p>{image.description}</p>
      </div> */}
    </div>
  );
}

export default Hero;
