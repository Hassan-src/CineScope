import Button from "../Button/Button";
import CustomError from "../Error/CustomError";
import HeroSkeleton from "../Loading/Skeleton/HeroSkeleton";
import styles from "./HeroBulletMenu.module.css";
function HeroBulletMenu({
  trendingDaily,
  setTopMovie,
  heroMovie,
  trendingDailyLoading,
  trendingDailyError,
}) {
  if (trendingDailyLoading) return <HeroSkeleton />;
  if (trendingDailyError) return <CustomError message={trendingDailyError} />;
  return (
    <div className={styles.bullets}>
      {trendingDaily.map((movie, i) => (
        <Button
          key={movie.id}
          className={`${styles.bullet} ${movie.id === heroMovie.id ? styles.bulletActive : ""}`}
          onClick={() => setTopMovie(i)}
        >
          0{i + 1}
        </Button>
      ))}
    </div>
  );
}
export default HeroBulletMenu;
