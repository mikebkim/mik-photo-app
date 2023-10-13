import React, { useEffect } from "react";
import { PhotoModalWrap } from "./Photo.Modal";

const PhotoModal = ({ selectedPhoto, setOpenPhotoModal }) => {
  const handleCloseModal = () => {
    setOpenPhotoModal(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <PhotoModalWrap>
      <div className="PhotoModal">
        <div className="photo-modal">
          <img className="photo-pop" src={selectedPhoto} />
        </div>
      </div>
    </PhotoModalWrap>
  );
};

export default PhotoModal;
