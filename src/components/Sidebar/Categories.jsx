import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./SideBar.module.css";
import film from "../../assets/cropped-film.svg";
import Arrowdown from "../../assets/Arrow-down.svg";
import Arrowright from "../../assets/Arrow-right.svg";
function Categories({ condition, catBtn, setCatBtn }) {
  //Sub menu include the series page and movies page
  function handleCatBtn() {
    setCatBtn((active) => !active);
  }
  return (
    <ul className={styles.categories}>
      <li>
        <Button onClick={handleCatBtn} className={styles.sidebarbtn}>
          <img src={film} alt="Film" />
          {condition && (
            <>
              <p>categories</p>
              <img
                className={styles.arrows}
                src={catBtn ? Arrowdown : Arrowright}
                alt="arrow"
              />
            </>
          )}
        </Button>
        {catBtn && (
          <ul>
            <li className={styles.category}>
              <div>
                <NavLink to={"movies"}>movies</NavLink>
                <img className={styles.arrows} src={Arrowright} alt="arrow" />
              </div>
            </li>
            <li className={styles.category}>
              <div>
                <NavLink to={"series"}>series</NavLink>
                <img className={styles.arrows} src={Arrowright} alt="arrow" />
              </div>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default Categories;
