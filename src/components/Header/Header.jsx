import styles from "./Header.module.css";
import Button from "../Button/Button";
function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.cinescope}>
        <img
          className={styles.cinescopelogo}
          src="../public/svgs/Cinescope-logo.svg"
          alt="cinescopeLogo"
        />
        <img
          className={styles.cinescopetext}
          src="../public/svgs/Cinescope.svg"
          alt="cinescopeLogo"
        />
      </div>
      <div className={styles.searchbox}>
        <input type="text" placeholder="Search" />
      </div>
      <Button className={styles.btnlogin}>
        <img src="../public/svgs/User.svg" alt="userLogo" />
        <span>SignIn</span>
      </Button>
    </header>
  );
}

export default Navbar;
