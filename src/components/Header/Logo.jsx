import styles from "./Logo.module.css";
import Cinescopelogo from "../../assets/Cinescope-logo.svg";
import Cinescope from "../../assets/Cinescope.svg";
function Logo() {
  return (
    <div className={styles.cinescope}>
      <img
        className={styles.cinescopelogo}
        src={Cinescopelogo}
        alt="cinescopeLogo"
      />
      <img
        className={styles.cinescopetext}
        src={Cinescope}
        alt="cinescopeLogo"
      />
    </div>
  );
}

export default Logo;
