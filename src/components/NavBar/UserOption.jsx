import Button from "../Button/Button";
import styles from "./UserOption.module.css";
import Arrowright from "../../assets/Arrow-right.svg";
import Arrowdown from "../../assets/Arrow-down.svg";
import Bookmark from "../../assets/Bookmark.svg";
import power from "../../assets/power-off.svg";
import UserBook from "../../assets/UserBook.svg";
function UserOption({ condition, userBtn, setUserBtn }) {
  function handleUserBtn() {
    setUserBtn((active) => !active);
  }
  return (
    <ul className={styles.user}>
      <li>
        <Button onClick={handleUserBtn} className={styles.sidebarbtn}>
          <img className={styles.catImage} src={UserBook} alt="User" />
          {condition && (
            <>
              <p className={styles.catText}>User</p>
              <img
                className={styles.arrows}
                src={userBtn ? Arrowdown : Arrowright}
                alt="arrow"
              />
            </>
          )}
        </Button>
        {userBtn && (
          <ul className={styles.catChild}>
            <li className={styles.category}>
              <Button
                className={`${styles.sidebarbtn} ${styles.sidebarbtnChild}`}
                to={"/bookmarks"}
              >
                <img
                  className={styles.categoryimg}
                  src={Bookmark}
                  alt="bookmark"
                />
                <span className={styles.catChildsText}>Bookmarks</span>
                <img className={styles.arrows} src={Arrowright} alt="arrow" />
              </Button>
            </li>
            <li className={styles.category}>
              <Button
                className={`${styles.sidebarbtn} ${styles.sidebarbtnChild}`}
                to={"/logIn"}
              >
                <img className={styles.categoryimg} src={power} alt="logout" />
                <span className={styles.catChildsText}>LogOut</span>
                <img className={styles.arrows} src={Arrowright} alt="arrow" />
              </Button>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default UserOption;
