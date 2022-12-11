import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import "./Sidetrend.css";

const Sidetrend = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEYS}`
      );
      setTrend(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  return (
    <>
      <section className="topTenNews">
        <Title title="India Top 10" />
        {trend.slice(0, 6).map((val) => {
          return (
            <div className="box ">
              <div className="img">
                <img src={val.urlToImage} alt="" />
              </div>
              <div className="text">
                <a href={val.url}>
                  <h1 className="title">{val.title.slice(0, 35)}...</h1>
                </a>
                <div className="date">
                  <label>{val.publishedAt}</label>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Sidetrend;
