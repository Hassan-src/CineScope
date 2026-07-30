import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

function SidebarHome({ condition }) {
  // Home linked to the home page
  return (
    <ul className={styles.home}>
      <li>
        <div>
          <img src="../../assets/Home.svg" alt="Home" />
          {condition && (
            <>
              <NavLink to={"/"}>
                <p>home</p>
              </NavLink>
              <img
                className={styles.arrows}
                src="../../assets/Arrow-right.svg"
                alt="arrow"
              />
            </>
          )}
        </div>
      </li>
    </ul>
  );
}

export default SidebarHome;
