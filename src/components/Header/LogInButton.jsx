import { NavLink } from "react-router-dom";
import styles from "./LogInButton.module.css";
function LogInButton() {
  return (
    <NavLink to={"logIn"} className={styles.login}>
      <img src="src/assets/svgs/User.svg" alt="userLogo" />
      <span>SignIn</span>
    </NavLink>
  );
}

export default LogInButton;
