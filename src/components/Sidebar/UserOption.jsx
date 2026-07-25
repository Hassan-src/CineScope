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
            src="../public/svgs/User.svg"
            alt=""
          />
          {condition && (
            <>
              <p>User</p>
              <img
                className={styles.arrows}
                src={
                  userBtn ? "../svgs/Arrow-down.svg" : "../svgs/Arrow-right.svg"
                }
                alt="arrow"
              />
            </>
          )}
        </Button>
        {userBtn && (
          <ul>
            <li className={styles.category}>
              <div>
                <img
                  className={styles.categoryimg}
                  src="../svgs/Bookmark.svg"
                  alt="bookmark"
                />
                <NavLink to={"bookmarks"}>Bookmarks</NavLink>
                <img
                  className={styles.arrows}
                  src="../svgs/Arrow-right.svg"
                  alt="arrow"
                />
              </div>
            </li>
            <li className={styles.category}>
              <div>
                <img
                  className={styles.categoryimg}
                  src="../svgs/power-off.svg"
                  alt="logout"
                />
                <NavLink to={"logIn"}>LogOut</NavLink>
                <img
                  className={styles.arrows}
                  src="../svgs/Arrow-right.svg"
                  alt="arrow"
                />
              </div>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default UserOption;
