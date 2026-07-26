import styles from "./logo.module.css";
function Logo() {
  return (
    <div className={styles.cinescope}>
      <img
        className={styles.cinescopelogo}
        src="src/assets/svgs/Cinescope-logo.svg"
        alt="cinescopeLogo"
      />
      <img
        className={styles.cinescopetext}
        src="src/assets/svgs/Cinescope.svg"
        alt="cinescopeLogo"
      />
    </div>
  );
}

export default Logo;
