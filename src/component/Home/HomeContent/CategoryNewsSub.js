import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryNewsSub.css";
import Slider from "react-slick";
import Title from "./Title";

const CategoryNewsSub = () => {
  const [sub, setSub] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=business&from=2022-12-06&to=2022-12-06&sortBy=popularity&apiKey=f8fd073b67244e2282d28191b573968a"
      );
      setSub(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <>
      <section className="subNews">
        <Title title="Business News" />
        <div className="subContainer">
          <Slider {...settings}>
            {sub.slice(0, 8).map((val) => {
              return (
                <div className="items">
                  <div className="subbox  ">
                    <div className="subImages">
                      <div className="img">
                        <img src={val.urlToImage} alt="" />
                      </div>
                      <div className=" category1">
                        <span>{val.source.name}</span>
                      </div>
                    </div>
                    <div className="subDetail">
                      <a href={val.url}>
                        <h1 className="title">{val.title.slice(0, 40)}</h1>
                      </a>
                      <div className="subDate">
                        <i class="fas fa-calendar-alt"></i>
                        <label>{val.publishedAt}</label>
                      </div>
                      <p className="desc">
                        {val.description.slice(0, 250)}....{" "}
                        <a href={val.url}>
                          <b>Read More</b>
                        </a>
                      </p>
                      <div className="subAuthor">
                        <i class="fas fa-user-tie"></i>
                        <label>{val.author}</label>
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

export default CategoryNewsSub;
