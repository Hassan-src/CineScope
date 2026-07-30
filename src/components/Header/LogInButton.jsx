import { NavLink } from "react-router-dom";
import styles from "./LogInButton.module.css";
import logo from "../../assets/User.svg";
function LogInButton() {
  return (
    <NavLink to={"logIn"} className={styles.login}>
      <img src={logo} alt="userLogo" />
      <span>SignIn</span>
    </NavLink>
  );
}

export default LogInButton;
