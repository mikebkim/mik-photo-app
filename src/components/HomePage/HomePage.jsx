import React from "react";
import { HomePageWrap } from "./Home.Page";
import Seoul from "./Seoul.jpg";

const HomePage = () => {
  return (
    <HomePageWrap>
      <div className="HomePage">
        <div className="header">
          <img className="main-image" src={Seoul} alt="Seoul" />
        </div>
        <div className="home">
          Embarking on a visual journey through the lens, my passion for
          photography is a boundless exploration of emotion, storytelling, and
          artistry. With every click, I strive to encapsulate the essence of
          fleeting moments, weaving a tapestry of memories and sentiments frozen
          in time. From the soft glow of dawn to the vibrant hues of a bustling
          city, my camera becomes a conduit for self-expression and a means to
          share the world as I perceive it. Through this captivating medium, I
          find joy in the pursuit of capturing beauty, creating a symphony of
          images that echo the heartbeat of my profound love for the art of
          photography
        </div>
      </div>
    </HomePageWrap>
  );
};

export default HomePage;
