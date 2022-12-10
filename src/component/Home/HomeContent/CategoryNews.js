import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryNews.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";

const CategoryNews = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8fd073b67244e2282d28191b573968a"
      );
      setCat(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };

  return (
    <>
      <section className="categoryNews">
        <Title title="Technology" />
        <div className="categoryContainer">
          <Slider {...settings}>
            {cat.map((val) => {
              return (
                <div className="items">
                  <div className="categoryBox ">
                    <div className="categoryImages categoryRow">
                      <div className="img">
                        <img src={val.urlToImage} alt="" />
                      </div>
                      <div className=" categoryTop">
                        <span>{val.source.name}</span>
                      </div>
                    </div>
                    <div className="categoryDetails categoryRow">
                      <a href={val.url}>
                        <h1 className="titleName">{val.title.slice(0, 50)}</h1>
                      </a>
                      <div className="categoryDate">
                        <i class="fas fa-calendar-alt"></i>
                        <label>{val.publishedAt}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default CategoryNews;
