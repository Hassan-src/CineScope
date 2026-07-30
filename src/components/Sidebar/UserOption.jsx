import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./SideBar.module.css";

function UserOption({ condition, userBtn, setUserBtn }) {
  // User options
  function handleUserBtn() {
    setUserBtn((active) => !active);
  }
  return (
    <ul className={styles.user}>
      <li>
        <Button onClick={handleUserBtn} className={styles.sidebarbtn}>
          <img
            className={styles.userimg}
            src="../../assets/UserBook.svg"
            alt="User"
          />
          {condition && (
            <>
              <p>User</p>
              <img
                className={styles.arrows}
                src={
                  userBtn
                    ? "../../assets/Arrow-down.svg"
                    : "../../assets/Arrow-right.svg"
                }
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
                src={"../../assets/Bookmark.svg"}
                alt={"bookmark"}
              />
              <NavLink to={"bookmarks"}>Bookmarks</NavLink>
              <img
                className={styles.arrows}
                src="../../assets/Arrow-right.svg"
                alt="arrow"
              />
            </li>
            <li className={styles.category}>
              <img
                className={styles.categoryimg}
                src="../../assets/power-off.svg"
                alt="logout"
              />
              <NavLink to={"logIn"}>LogOut</NavLink>
              <img
                className={styles.arrows}
                src="../../assets/Arrow-right.svg"
                alt="arrow"
              />
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default UserOption;
