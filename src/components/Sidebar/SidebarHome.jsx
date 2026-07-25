import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

function SidebarHome({ condition }) {
  // Home linked to the home page
  return (
    <ul className={styles.home}>
      <li>
        <div>
          <img src="../svgs/Home.svg" alt="Home" />
          <NavLink to={"/"}>{condition && <p>home</p>}</NavLink>
          {condition && (
            <img
              className={styles.arrows}
              src="../svgs/Arrow-right.svg"
              alt="arrow"
            />
          )}
        </div>
      </li>
    </ul>
  );
}

export default SidebarHome;
