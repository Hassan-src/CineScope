import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./SideBar.module.css";

function Categories({ condition, catBtn, setCatBtn }) {
  //Sub menu include the series page and movies page
  function handleCatBtn() {
    setCatBtn((active) => !active);
  }
  return (
    <ul className={styles.categories}>
      <li>
        <Button onClick={handleCatBtn} className={styles.sidebarbtn}>
          <img src="src/assets/svgs/cropped-film.svg" alt="Film" />
          {condition && (
            <>
              <p>categories</p>
              <img
                className={styles.arrows}
                src={
                  catBtn
                    ? "src/assets/svgs/Arrow-down.svg"
                    : "src/assets/svgs/Arrow-right.svg"
                }
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
                <img
                  className={styles.arrows}
                  src="src/assets/svgs/Arrow-right.svg"
                  alt="arrow"
                />
              </div>
            </li>
            <li className={styles.category}>
              <div>
                <NavLink to={"series"}>series</NavLink>
                <img
                  className={styles.arrows}
                  src="src/assets/svgs/Arrow-right.svg"
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

export default Categories;
