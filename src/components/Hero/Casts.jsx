import useMovieProvider from "../../context/useMovieProvider";
import CustomError from "../Error/CustomError";
import CreditsSkeleton from "../Loading/Skeleton/Hero/CreditsSkeleton";

import styles from "./Casts.module.css";

function Casts() {
  const { credits } = useMovieProvider();
  if (credits.loading) return <CreditsSkeleton />;
  if (credits.error) return <CustomError message={credits.error} />;
  const actors = credits?.data?.cast?.slice(0, 5) ?? [];
  const directors =
    credits?.data?.crew
      ?.filter((dir) => dir.department === "Directing")
      .slice(0, 3) ?? [];
  if (!(actors.length > 0 || directors.length > 0))
    return <p>No casts information available!</p>;
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
