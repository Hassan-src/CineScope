import styles from "./SideBar.module.css";
import { useState } from "react";
import SidebarHome from "./SidebarHome";
import Categories from "./Categories";
import UserOption from "./UserOption";
import SidebarFooter from "./SidebarFooter";

function SideBar() {
  // Expanding the sidebar base on the condition
  const [isExpanded, setIsExpanded] = useState(false);
  const [userBtn, setUserBtn] = useState(false);
  const [catBtn, setCatBtn] = useState(false);
  // Sidebar stays expanded base on the condition (if each submenu is open stays open)
  const condition = isExpanded || userBtn || catBtn;
  // Buttons functionalities

  return (
    <aside
      className={styles.aside}
      // Changing the expanding condition on mouse enter
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <SidebarHome condition={condition} />
      <Categories condition={condition} catBtn={catBtn} setCatBtn={setCatBtn} />
      <UserOption
        condition={condition}
        userBtn={userBtn}
        setUserBtn={setUserBtn}
      />
      <SidebarFooter condition={condition} />
    </aside>
  );
}

export default SideBar;
