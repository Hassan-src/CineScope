import styles from "./SideBar.module.css";
function SideBarFooter({ condition }) {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img src="src/assets/svgs/receipt.svg" alt="credit" />
          {condition && <p>API credit: TMDB</p>}
        </div>
      </a>
    </div>
  );
}

export default SideBarFooter;
