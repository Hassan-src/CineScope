import Header from "../../components/Header/Header";
import SideBar from "../../components/Sidebar/SideBar";
import MainTvSeries from "../../components/Series/MainTvSeries";
import styles from "./Series.module.css";

function Series() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <SideBar />
        <MainTvSeries />
      </div>
    </>
  );
}

export default Series;
