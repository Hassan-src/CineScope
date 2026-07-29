import styles from "./DetailSkeleton.module.css";
function DetailSkeleton() {
  return (
    <div className={styles.main}>
      <div className={styles.picture}></div>
      <div className={styles.info}>
        <div className={styles.title}></div>
        <div className={styles.about}></div>
        <div className={styles.rate}></div>
        <div className={styles.actors}></div>
        <div className={styles.directors}></div>
      </div>
      <div className={styles.overview}></div>
    </div>
  );
}

export default DetailSkeleton;
