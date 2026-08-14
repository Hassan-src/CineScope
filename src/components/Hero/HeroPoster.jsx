import { getImageUrl } from "../../utils/image";
import Button from "../Button/Button";
import CustomError from "../Error/CustomError";
import HeroSkeleton from "../Loading/Skeleton/Hero/HeroSkeleton";
import useMovieProvider from "../../context/useMovieProvider";
import styles from "./HeroPoster.module.css";
import arrownarrowleft from "../../assets/arrow-narrow-left.svg";
import arrownarrowright from "../../assets/arrow-narrow-right.svg";

function HeroPoster() {
  const { setTopMovie, heroMovie, trending } = useMovieProvider();
  if (trending.loading) return <HeroSkeleton />;
  if (trending.error) return <CustomError message={trending.error} />;
  // Updating the index using the modular formula e.g: (0-1) % 5 = -1 => -1 + 5 = 4 => 4 % 5 = 4
  function handleLeftBtn() {
    if (!trending.data.length) return;
    setTopMovie(
      (topMov) => (topMov - 1 + trending.data.length) % trending.data.length,
    );
  }
  function handleRightBtn() {
    if (!trending.data.length) return;
    setTopMovie((topMov) => (topMov + 1) % trending.data.length);
  }
  return (
    <>
      <Button className={styles.leftBtn} onClick={handleLeftBtn}>
        <img className={styles.arrow} src={arrownarrowleft} alt="left button" />
      </Button>
      <img
        // The size is set according to the API documentation for images
        src={getImageUrl(heroMovie.backdrop_path, "original")}
        key={heroMovie.id}
        className={styles.backPoster}
        alt={`${heroMovie.original_title} poster`}
      />
      <Button className={styles.rightBtn} onClick={handleRightBtn}>
        <img
          className={styles.arrow}
          src={arrownarrowright}
          alt="left button"
        />
      </Button>
    </>
  );
}

export default HeroPoster;
