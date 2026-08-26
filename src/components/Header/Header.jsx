import useMovieProvider from "../../context/useMovieProvider";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import LogInButton from "./LogInButton";
import Button from "../Button/Button";

import styles from "./Header.module.css";

import search from "../../assets/search.svg";
import NavBar from "../NavBar/NavBar";

function Header() {
  const { searchBox, setSearchBox } = useMovieProvider();
  return (
    <>
      {searchBox && <SearchBox />}
      <header className={styles.header}>
        <Logo />
        <NavBar />
        <Button
          className={styles.searchButton}
          onClick={() => setSearchBox((s) => !s)}
        >
          <img src={search} alt="search" />
        </Button>
        <LogInButton />
      </header>
    </>
  );
}

export default Header;
