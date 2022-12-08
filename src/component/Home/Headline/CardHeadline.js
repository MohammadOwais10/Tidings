import React from "react";

const CardHeadline = ({
  url,
  title,
  publishedAt,
  urlToImage,
  name,
  author,
}) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={urlToImage} alt="" />
        </div>
        <div className="text">
          <span className="category">{name}</span>
          <a href={url}>
            <h1 classname="titleBg">{title}</h1>
          </a>
          <div className="author flex">
            <span>By:{author}</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHeadline;
