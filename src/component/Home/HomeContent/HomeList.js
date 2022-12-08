import React from "react";
// import Side from "../../sideContent/side/Side";
import MainNews from "../HomeContent/MainNews";
import CategoryNews from "../HomeContent/CategoryNews";
import CategoryNewsSub from "./CategoryNewsSub";
import Sidebar from "./Sidebar";
import "./HomeList.css";

const Homes = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <MainNews />
            <CategoryNews />
            <CategoryNewsSub />
          </section>
          <section className="sideContent">
            <Sidebar />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;
