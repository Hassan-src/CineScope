import { Link } from "react-router-dom";
import MainMovies from "../../components/DifferentMovies/MainMovies";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";

import styles from "./Movies.module.css";

function Movies() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Link to={"movies"} />
        <SideBar />
        <MainMovies />
      </div>
    </>
  );
}

export default Movies;
