import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Layout/Header";
import "./App.css";
import Home from "./component/Home/Home";
import PostNewsPage from "./component/PostNews/PostNewsPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostNewsPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
