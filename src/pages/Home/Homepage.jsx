import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function Homepage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <Link to="/" />
      </main>
    </>
  );
}

export default Homepage;
