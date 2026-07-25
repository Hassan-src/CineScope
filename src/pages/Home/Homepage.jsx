import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import Data from "../../components/Data/Data";

function Homepage() {
  return (
    <>
      <Link to="/" />
      <Header />
      <main className={styles.main}>
        <SideBar />
        <div></div>
      </main>
    </>
  );
}

export default Homepage;
