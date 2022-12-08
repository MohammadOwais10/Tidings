import React from "react";
import "./Sidebar.css";
import Title from "./Title";
import Sidetrend from "./Sidetrend";

const Sidebar = () => {
  const catgeory = [
    "World",
    "Sport",
    "Health",
    "Science",
    "Business",
    "Technology",
    "Entertainment",
  ];

  return (
    <>
      <Sidetrend />
      <section className="categorysNews">
        <Title title="Categories" />
        {catgeory.map((val) => {
          return (
            <div className="categorySelection">
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      <Title title="Subscribe News" />
      <section className="subscribe">
        <h1 className="title">Subscribe to our News</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>
    </>
  );
};

export default Sidebar;
