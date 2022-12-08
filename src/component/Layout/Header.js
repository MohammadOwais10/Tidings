import React, { useState } from "react";
import TitleHeader from "./TitleHeader";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <TitleHeader />
      <div className="header">
        <nav>
          <ul
            className={navbar ? "navbar" : "onavbar"}
            onClick={() => setNavbar(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li className="specialList">
              <Link to="/post">
                <i class="fas fa-plus"></i>Post
              </Link>
            </li>
          </ul>

          <button className="barIcon" onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
