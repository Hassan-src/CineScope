import { Link, NavLink } from "react-router-dom";
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
            {/* FIXME this structure has to be fixed the button need to be removed */}
            <li className={styles.category}>
              <Link to={"movies"}>
                <Button className={styles.sidebarbtn}>
                  movies
                  <img className={styles.arrows} src={Arrowright} alt="arrow" />
                </Button>
              </Link>
            </li>
            <Link to={"series"}>
              <li className={styles.category}>
                <Button className={styles.sidebarbtn}>
                  series
                  <img className={styles.arrows} src={Arrowright} alt="arrow" />
                </Button>
              </li>
            </Link>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default Categories;
