import Button from "../Button/Button";

import styles from "./BookmarkEmpty.module.css";

import empty from "../../assets/empty-folder.svg";

function BookmarkEmpty() {
  return (
    <div className={styles.listEmpty}>
      <img className={styles.emptyFolder} src={empty} alt="emptyFolder" />
      <h1 className={styles.emptyText}>
        Your bookmark page is empty add more...
      </h1>
      <div className={styles.buttonsRedi}>
        <Button className={styles.redirectBtn} to={"/series"}>
          Series page
        </Button>
        <Button to={"/"} className={styles.redirectBtn}>
          Home page
        </Button>
        <Button className={styles.redirectBtn} to={"/movies"}>
          movies page
        </Button>
      </div>
    </div>
  );
}

export default BookmarkEmpty;
