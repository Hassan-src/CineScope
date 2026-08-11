import styles from "./CustomError.module.css";
import logo from "../../assets/Error.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
// Custom Error message
function CustomError({ message }) {
  return (
    <div className={styles.error}>
      <div className={styles.errorLogo}>
        <img className={styles.errorImage} src={logo} alt="error" />
        <span className={styles.errorText}>Error!</span>
      </div>
      <p className={styles.errorMessage}>{message}</p>
      {message === "Page not found" ? (
        <Link className={styles.buttonLink} to={"/"}>
          HomPage
        </Link>
      ) : (
        <Button className={styles.btnClose}>Close</Button>
      )}
    </div>
  );
}

export default CustomError;
