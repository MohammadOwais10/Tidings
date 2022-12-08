import React from "react";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <>
      <div className="heading">
        <h6>{title}</h6>
      </div>
    </>
  );
};

export default Title;
