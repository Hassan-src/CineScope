import Button from "../Button/Button";
import styles from "./Categories.module.css";
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
          <img className={styles.catImage} src={film} alt="Film" />
          {condition && (
            <>
              <p className={styles.catText}>categories</p>
              <img
                className={styles.arrows}
                src={catBtn ? Arrowdown : Arrowright}
                alt="arrow"
              />
            </>
          )}
        </Button>
        {catBtn && (
          <ul className={styles.catChild}>
            <li className={styles.category}>
              <Button className={styles.categoryChildBtn} to={"/movies"}>
                <span className={styles.categoryChildsText}>movies</span>
                <img className={styles.arrows} src={Arrowright} alt="arrow" />
              </Button>
            </li>
            <li className={styles.category}>
              <Button className={styles.categoryChildBtn} to={"/series"}>
                <span className={styles.categoryChildsText}>series</span>
                <img className={styles.arrows} src={Arrowright} alt="arrow" />
              </Button>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default Categories;
