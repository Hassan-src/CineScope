import styles from "./logo.module.css";
function Logo() {
  return (
    <div className={styles.cinescope}>
      <img
        className={styles.cinescopelogo}
        src="../../assets/Cinescope-logo.svg"
        alt="cinescopeLogo"
      />
      <img
        className={styles.cinescopetext}
        src="../../assets/Cinescope.svg"
        alt="cinescopeLogo"
      />
    </div>
  );
}

export default Logo;
