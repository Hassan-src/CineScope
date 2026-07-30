import styles from "./Error.module.css";
import logo from "../../assets/Error.svg";
// Custom Error message
function CustomError({ message }) {
  return (
    <div className={styles.error}>
      <div className={styles.errorLogo}>
        <img src={logo} alt="error" />
        <span>Error!</span>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default CustomError;
