import Button from "../Button/Button";
import CustomError from "../Error/CustomError";
import HeroSkeleton from "../Loading/Skeleton/Hero/HeroSkeleton";
import useMovieProvider from "../../context/useMovieProvider";
import styles from "./HeroBulletMenu.module.css";
function HeroBulletMenu() {
  const { trending, heroMovie, setTopMovie } = useMovieProvider();
  if (trending.loading) return <HeroSkeleton />;
  if (trending.error) return <CustomError message={trending.error} />;
  return (
    <div className={styles.bullets}>
      {trending.data.map((movie, i) => (
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
