import React from "react";
import { HomePageWrap } from "./Home.Page";
import mainice from "./mainice.jpeg";

const HomePage = () => {
  return (
    <HomePageWrap>
      <div className="HomePage">
        <div className="header">
          <img className="main-image" src={mainice} alt="mainice" />
        </div>
        <div className="home">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;
