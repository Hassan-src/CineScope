import styles from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import Home from "../../assets/Home.svg";
import Arrowright from "../../assets/Arrow-right.svg";
function SidebarHome({ condition }) {
  // Home linked to the home page
  return (
    <ul className={styles.home}>
      <li>
        <div className={styles.homeBtn}>
          <img src={Home} alt="Home" />
          {condition && (
            <>
              <NavLink to={"/"}>
                <p>home</p>
              </NavLink>
              <img className={styles.arrows} src={Arrowright} alt="arrow" />
            </>
          )}
        </div>
      </li>
    </ul>
  );
}

export default SidebarHome;
