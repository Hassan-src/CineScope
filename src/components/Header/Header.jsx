import styles from "./Header.module.css";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import LogInButton from "./LogInButton";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchBox />
      <LogInButton />
    </header>
  );
}

export default Header;
