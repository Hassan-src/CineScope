import styles from "./SearchBox.module.css";
function SearchBox() {
  return (
    <div className={styles.searchbox}>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBox;
