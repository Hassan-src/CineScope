import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import Hero from "../../components/Hero/Hero";
import MainMovies from "../../components/DifferentMovies/MainMovies";
import HeroProvider from "../../Context/HeroProvider";

function Homepage() {
  return (
    <>
      <Link to="/" />
      <Header />
      <main className={styles.main}>
        <SideBar />
        <HeroProvider>
          <Hero />
        </HeroProvider>
      </main>
    </>
  );
}

export default Homepage;
