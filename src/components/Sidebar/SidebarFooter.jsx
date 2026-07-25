import styles from "./SideBar.module.css";
function SideBarFooter({ condition }) {
  return (
    <footer className={styles.footer}>
      <a href="https://www.themoviedb.org/">
        <div>
          <img src="../svgs/receipt.svg" alt="credit" />
          {condition && <p>API credit: TMDB</p>}
        </div>
      </a>
    </footer>
  );
}

export default SideBarFooter;
