import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Headline.css";
import CardHeadline from "./CardHeadline";

const Headline = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=39c3025e706146f99c1db7b6e2295f6e"
      );
      setArticles(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  return (
    <>
      <section className="headline">
        <div className="container">
          {articles.slice(0, 4).map((article) => {
            return (
              <CardHeadline
                key={article.id}
                url={article.url}
                title={article.title}
                publishedAt={article.publishedAt}
                author={article.author}
                urlToImage={article.urlToImage}
                name={article.source.name}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Headline;
