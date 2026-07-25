import { Link } from "react-router-dom";
import Homepage from "./Home/Homepage";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import Data from "../components/Data/Data";

function AppLayout() {
  return (
    <>
      <Link to={"AppLayout"} />
      <Header />
      <Homepage>
        <SideBar />
        <Data />
      </Homepage>
    </>
  );
}

export default AppLayout;
