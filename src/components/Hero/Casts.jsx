import CustomError from "../Error/CustomError";
import DetailSkeleton from "../Loading/Skeleton/detailSkeleton";
import styles from "./Casts.module.css";
function Casts({ actors, directors, creditsLoading, creditsError }) {
  if (creditsLoading) return <DetailSkeleton />;
  if (creditsError) return <CustomError message={creditsError} />;
  // Actors and directors from Tmdb api
  return (
    <>
      <p className={styles.casts}>
        <span className={styles.topic}>Actors:</span>
        {actors.map((actor) => (
          <span key={actor.id} className={styles.castNames}>
            {actor.name}
          </span>
        ))}
      </p>
      <p className={styles.casts}>
        <span className={styles.topic}>Directors:</span>
        {directors.map((dir) => (
          <span key={dir.id} className={styles.castNames}>
            {dir.name}
          </span>
        ))}
      </p>
    </>
  );
}

export default Casts;
