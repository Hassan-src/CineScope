import styles from "./Error.module.css";
// Custom Error message
function CustomError({ message }) {
  return (
    <div className={styles.error}>
      <div className={styles.errorLogo}>
        <img src="../../assets/Error.svg" alt="error" />
        <span>Error!</span>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default CustomError;
