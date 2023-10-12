import React from "react";
// import React, { useState } from "react";
import { PhotoModalWrap } from "./Photo.Modal";

const PhotoModal = ({ photo, setOpenPhotoModal }) => {
  const handleCloseModal = () => {
    setOpenPhotoModal(false);
  };

  return (
    <PhotoModalWrap>
      <div className="PhotoModal">
        <div className="photo-modal">
          <img className="photo" src={photo} />
        </div>
        <div className="close-modal" onClick={() => handleCloseModal()}>
          x
        </div>
      </div>
    </PhotoModalWrap>
  );
};

export default PhotoModal;
