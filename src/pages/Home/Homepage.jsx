import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

function Homepage() {
  return (
    <>
      <Link to="/" />
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}

export default Homepage;
