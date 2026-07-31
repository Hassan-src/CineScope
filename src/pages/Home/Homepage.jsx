import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import Hero from "../../components/Hero/Hero";
import MainMovies from "../../components/DifferentMovies/MainMovies";

function Homepage() {
  return (
    <>
      <Link to="/" />
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Hero />
      </main>
    </>
  );
}

export default Homepage;
