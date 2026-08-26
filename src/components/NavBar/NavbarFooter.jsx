import styles from "./NavbarFooter.module.css";
import receipt from "../../assets/receipt.svg";
function SideBarFooter({ condition }) {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <span className={styles.icon}>
            <img src={receipt} alt="credit" />
          </span>
          {condition && <p>API credit: TMDB</p>}
        </div>
      </a>
    </div>
  );
}

export default SideBarFooter;
