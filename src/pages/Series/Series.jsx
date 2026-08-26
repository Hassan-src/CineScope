import Header from "../../components/Header/Header";
import MainTvSeries from "../../components/Series/MainTvSeries";
import styles from "./Series.module.css";

function Series() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <MainTvSeries />
      </div>
    </>
  );
}

export default Series;
