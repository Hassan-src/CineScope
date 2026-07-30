import styles from "./CreditsSkeleton.module.css";
function CreditsSkeleton() {
  return (
    <div>
      <div className={styles.actors}></div>
      <div className={styles.directors}></div>
    </div>
  );
}

export default CreditsSkeleton;
