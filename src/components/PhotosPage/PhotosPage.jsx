import React from "react";
// import React, { useState } from "react";
import { PhotosPageWrap } from "./Photos.Page";
import photospageplaceholder from "./photospageplaceholder.png";

const PhotosPage = () => {
  // const [allPhotos, setAllPhotos] = useState([photospageplaceholder]);

  const allPhotos = [photospageplaceholder];

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          {allPhotos.map((photo) => {
            return <img className="photo" src={photo} alt="placeholder" />;
          })}
        </div>
      </div>
    </PhotosPageWrap>
  );
};

export default PhotosPage;
