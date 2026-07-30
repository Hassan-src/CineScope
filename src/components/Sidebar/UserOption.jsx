import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./SideBar.module.css";
import Arrowright from "../../assets/Arrow-right.svg";
import Arrowdown from "../../assets/Arrow-down.svg";
import Bookmark from "../../assets/Bookmark.svg";
import power from "../../assets/power-off.svg";
import UserBook from "../../assets/UserBook.svg";
function UserOption({ condition, userBtn, setUserBtn }) {
  // User options
  function handleUserBtn() {
    setUserBtn((active) => !active);
  }
  return (
    <ul className={styles.user}>
      <li>
        <Button onClick={handleUserBtn} className={styles.sidebarbtn}>
          <img className={styles.userimg} src={UserBook} alt="User" />
          {condition && (
            <>
              <p>User</p>
              <img
                className={styles.arrows}
                src={userBtn ? Arrowdown : Arrowright}
                alt="arrow"
              />
            </>
          )}
        </Button>
        {userBtn && (
          <ul>
            <li className={styles.category}>
              <img
                className={styles.categoryimg}
                src={Bookmark}
                alt="bookmark"
              />
              <NavLink to={"bookmarks"}>Bookmarks</NavLink>
              <img className={styles.arrows} src={Arrowright} alt="arrow" />
            </li>
            <li className={styles.category}>
              <img className={styles.categoryimg} src={power} alt="logout" />
              <NavLink to={"logIn"}>LogOut</NavLink>
              <img className={styles.arrows} src={Arrowright} alt="arrow" />
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default UserOption;
