import React from "react";
import { HomePageWrap } from "./Home.Page";
import placeholder from "./placeholder.png";

const HomePage = () => {
  return (
    <HomePageWrap>
      <div className="HomePage">
        <div className="header">
          <img className="main-image" src={placeholder} />
        </div>

        <div className="home"></div>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;
