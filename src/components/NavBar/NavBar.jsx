import styles from "./NavBar.module.css";
import { useState } from "react";
import SidebarHome from "./NavBarHome";
import Categories from "./Categories";
import UserOption from "./UserOption";
import SidebarFooter from "./NavbarFooter";
import arrowLeft from "../../assets/Arrow-right.svg";
import arrowDown from "../../assets/Arrow-down.svg";
function NavBar() {
  // Expanding the sidebar base on the condition
  const [isExpanded, setIsExpanded] = useState(false);
  const [userBtn, setUserBtn] = useState(false);
  const [catBtn, setCatBtn] = useState(false);
  // Sidebar stays expanded base on the condition (if each submenu is open stays open)
  const condition = isExpanded || userBtn || catBtn;
  // Buttons functionalities
  // TODO Changing the side bar to a nav bar like a ham btn li ---> div --> options to change the page
  return (
    <nav
      className={`${styles.nav} ${isExpanded ? styles.active : ""}`}
      // Changing the expanding condition on mouse enter
    >
      <div
        className={styles.menuOpenerBox}
        onClick={() => setIsExpanded((s) => !s)}
      >
        <span>Menu</span>
        {isExpanded ? (
          <img className={styles.menuArrow} src={arrowDown} alt="arrow" />
        ) : (
          <img className={styles.menuArrow} src={arrowLeft} alt="arrow" />
        )}
      </div>
      {isExpanded && (
        <div className={styles.navBarMenu}>
          <SidebarHome condition={condition} />
          <Categories
            condition={condition}
            catBtn={catBtn}
            setCatBtn={setCatBtn}
          />
          <UserOption
            condition={condition}
            userBtn={userBtn}
            setUserBtn={setUserBtn}
          />
          <SidebarFooter condition={condition} />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
