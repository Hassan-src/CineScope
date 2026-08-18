import styles from "./SideBar.module.css";
import Button from "../Button/Button";
import Home from "../../assets/Home.svg";
import Arrowright from "../../assets/Arrow-right.svg";
function SidebarHome({ condition }) {
  // Home linked to the home page
  return (
    <ul className={styles.categories}>
      <li className={styles.homeBtn}>
        <Button className={styles.sidebarbtn} to={"/"}>
          <img className={styles.catImage} src={Home} alt="Home" />
          {condition && (
            <>
              <p className={styles.catText}>home</p>
              <img className={styles.arrows} src={Arrowright} alt="arrow" />
            </>
          )}
        </Button>
      </li>
    </ul>
  );
}

export default SidebarHome;
