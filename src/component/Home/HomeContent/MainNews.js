import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./MainNews.css";
import Title from "./Title";

const MainNews = () => {
  const [home, setHome] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=apple&from=2022-12-08&to=2022-12-08&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEYS}`
      );
      setHome(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2,
  };

  return (
    <>
      <section className="popularNews">
        <Title title="Popular News" />
        <div className="ContainerNews">
          <Slider {...settings}>
            {home.slice(0, 10).map((val) => {
              return (
                <div className="itemNews">
                  <div className="boxNews ">
                    <div className="imagesNewsConatiner">
                      <div className="imgNews">
                        <img src={val.urlToImage} alt="" />
                      </div>
                      <div className=" popularNewsCategory">
                        <span>{val.source.name}</span>
                      </div>
                    </div>
                    <div className="text">
                      <a href={val.url}>
                        <h1 className="titleNewsPopular">
                          {val.title.slice(0, 40)}
                        </h1>
                      </a>
                      <div className="datePopular">
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

export default MainNews;
