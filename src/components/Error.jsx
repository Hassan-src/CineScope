import styles from "./Error.module.css";

function Error({ message }) {
  return (
    <div className={styles.error}>
      <div className={styles.errorLogo}>
        <img src="../public/svgs/Error.svg" alt="error" />
        <span>Error!</span>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default Error;
