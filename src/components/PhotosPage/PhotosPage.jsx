import React, { useState } from "react";
import { PhotosPageWrap } from "./Photos.Page";
import photospageplaceholder from "./photospageplaceholder.png";

const PhotosPage = () => {
  const [allPhotos, setAllPhotos] = useState([photospageplaceholder]);

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          {allPhotos.map((photo) => {
            return (
              <div className="photo">
                <img src={photo} />
              </div>
            );
          })}
        </div>
      </div>
    </PhotosPageWrap>
  );
};

export default PhotosPage;
