import styles from "./Casts.module.css";
function Casts({ actors, directors }) {
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
