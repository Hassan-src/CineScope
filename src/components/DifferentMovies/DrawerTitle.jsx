import Button from "../Button/Button";
import styles from "./DrawerTitle.module.css";
function DrawerTitle({ children }) {
  return (
    <div className={styles.pMoviesHeader}>
      <h2 className={styles.header}>{children}</h2>
      <Button className={styles.moreBtn}>more</Button>
    </div>
  );
}
export default DrawerTitle;
