import { NavLink } from "react-router-dom";
import Button from "./Button";
import styles from "./SideBar.module.css";
import { useState } from "react";

function SideBar() {
  // Expanding the sidebar base on the condition
  const [isExpanded, setIsExpanded] = useState(false);
  const [userBtn, setUserBtn] = useState(false);
  const [catBtn, setCatBtn] = useState(false);
  // Sidebar stays expanded base on the condition (if each submenu is open stays open)
  const condition = isExpanded || userBtn || catBtn;
  // Buttons functionalities
  function handleUserBtn() {
    setUserBtn((active) => !active);
  }
  function handleCatBtn() {
    setCatBtn((active) => !active);
  }
  return (
    <aside
      className={styles.aside}
      // Changing the expanding condition on mouse enter
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Home linked to the home page */}
      <ul className={styles.home}>
        <li>
          <div>
            <img src="../public/svgs/Home.svg" alt="Home" />
            <NavLink to={"/"}>{condition && <p>home</p>}</NavLink>
            {condition && (
              <img
                className={styles.arrows}
                src="../public/svgs/Arrow-right.svg"
                alt="arrow"
              />
            )}
          </div>
        </li>
      </ul>
      {/* Sub menu include the series page and movies page */}
      <ul className={styles.categories}>
        <li>
          <Button onClick={handleCatBtn} className={styles.sidebarbtn}>
            <img src="../public/svgs/cropped-film.svg" alt="Film" />
            {condition && (
              <>
                <p>categories</p>
                <img
                  className={styles.arrows}
                  src={
                    catBtn
                      ? "../public/svgs/Arrow-down.svg"
                      : "../public/svgs/Arrow-right.svg"
                  }
                  alt="arrow"
                />
              </>
            )}
          </Button>
          {catBtn && (
            <>
              <li className={styles.category}>
                <div>
                  <NavLink to={"movies"}>movies</NavLink>
                  <img
                    className={styles.arrows}
                    src="../public/svgs/Arrow-right.svg"
                    alt="arrow"
                  />
                </div>
              </li>
              <li className={styles.category}>
                <div>
                  <NavLink to={"series"}>series</NavLink>
                  <img
                    className={styles.arrows}
                    src="../public/svgs/Arrow-right.svg"
                    alt="arrow"
                  />
                </div>
              </li>
            </>
          )}
        </li>
      </ul>
      {/* User options */}
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
                    userBtn
                      ? "../public/svgs/Arrow-down.svg"
                      : "../public/svgs/Arrow-right.svg"
                  }
                  alt="arrow"
                />
              </>
            )}
          </Button>
          {userBtn && (
            <>
              <li className={styles.category}>
                <div>
                  <img
                    className={styles.categoryimg}
                    src="../public/svgs/Bookmark.svg"
                    alt="bookmark"
                  />
                  <NavLink to={"bookmarks"}>Bookmarks</NavLink>
                  <img
                    className={styles.arrows}
                    src="../public/svgs/Arrow-right.svg"
                    alt="arrow"
                  />
                </div>
              </li>
              <li className={styles.category}>
                <div>
                  <img
                    className={styles.categoryimg}
                    src="../public/svgs/power-off.svg"
                    alt="logout"
                  />
                  <NavLink to={"logIn"}>LogOut</NavLink>
                  <img
                    className={styles.arrows}
                    src="../public/svgs/Arrow-right.svg"
                    alt="arrow"
                  />
                </div>
              </li>
            </>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
