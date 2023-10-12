import React, { useState } from "react";
import { PhotosPageWrap } from "./Photos.Page";
import PhotoModal from "../PhotoModal/PhotoModal";
import photospageplaceholder from "./photospageplaceholder.png";

const PhotosPage = () => {
  // const [allPhotos, setAllPhotos] = useState([photospageplaceholder]);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const handleOpenPhotoModal = () => {
    setOpenPhotoModal(!openPhotoModal);
  };

  const allPhotos = [photospageplaceholder];

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          {allPhotos.map((photo) => {
            return (
              <React.Fragment>
                <img
                  className="photo"
                  src={photo}
                  alt="placeholder"
                  onClick={() => handleOpenPhotoModal()}
                />
                {openPhotoModal ? <PhotoModal photo={photo} setOpenPhotoModal={setOpenPhotoModal} /> : ""}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </PhotosPageWrap>
  );
};

export default PhotosPage;
