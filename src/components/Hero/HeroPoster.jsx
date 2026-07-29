import { getImageUrl } from "../../utils/image";
import Button from "../Button/Button";
import CustomError from "../Error/CustomError";
import HeroSkeleton from "../Loading/Skeleton/HeroSkeleton";
import styles from "./HeroPoster.module.css";
function HeroPoster({
  heroMovie,
  trendingDaily,
  setTopMovie,
  trendingDailyLoading,
  trendingDailyError,
}) {
  if (trendingDailyLoading) return <HeroSkeleton />;
  if (trendingDailyError) return <CustomError message={trendingDailyError} />;
  // Updating the index using the modular formula e.g: (0-1) % 5 = -1 => -1 + 5 = 4 => 4 % 5 = 4
  function handleLeftBtn() {
    if (!trendingDaily.length) return;
    setTopMovie(
      (topMov) =>
        (((topMov - 1) % trendingDaily.length) + trendingDaily.length) %
        trendingDaily.length,
    );
  }
  function handleRightBtn() {
    if (!trendingDaily.length) return;
    setTopMovie(
      (topMov) =>
        (((topMov + 1) % trendingDaily.length) + trendingDaily.length) %
        trendingDaily.length,
    );
  }
  return (
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
    </>
  );
}

export default HeroPoster;
