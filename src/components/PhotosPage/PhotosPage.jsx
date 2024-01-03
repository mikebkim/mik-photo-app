import React from "react";
import { PhotosPageWrap } from "./Photos.Page";
import { Link } from "react-router-dom";

const PhotosPage = ({ allPhotos }) => {
  const photos = Object.entries(allPhotos);

  const filteredIcelandPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("iceland")
  );

  const filteredGreenlandPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("greenland")
  );

  const filteredPatagoniaPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes("patagonia")
  );

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          <div className="iceland-photos photos-column">
            <Link to="/photos/iceland" className="location-link">
              <h2>ICELAND</h2>
              <img
                className="photo"
                src={filteredIcelandPhotos[0][1]}
                alt={""}
              />
            </Link>
          </div>
          <div className="greenland-photos photos-column">
            <Link to="/photos/greenland" className="location-link">
              <h2>GREENLAND</h2>
              <img
                className="photo"
                src={filteredGreenlandPhotos[0][1]}
                alt={""}
              />
            </Link>
          </div>
          <div className="losangeles-photos photos-column">
            <Link to="/photos/patagonia" className="location-link">
              <h2>PATAGONIA</h2>
              <img
                className="photo"
                src={filteredPatagoniaPhotos[0][1]}
                alt={""}
              />
            </Link>
          </div>
        </div>
      </div>
    </PhotosPageWrap>
  );
};

export default PhotosPage;
