import styles from "./Error.module.css";
// Custom Error message
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
