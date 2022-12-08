import React from "react";
import logo from "../../assets/icon-news.png";
import "./TitleHeader.css";

const TitleHeader = () => {
  return (
    <>
      <div className="titleHeader">
        <div className="logo">
          <img src={logo} alt="title" />
          <h1>Tidings</h1>
        </div>
      </div>
    </>
  );
};

export default TitleHeader;
