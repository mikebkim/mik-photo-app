import React, { useState } from "react";
import { PhotosSecondaryPageWrap } from "./PhotosSecondary.Page.js";
import PhotoModal from "../PhotoModal/PhotoModal";

const PhotosSecondaryPage = ({ allSecondaryImages }) => {
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const handleOpenPhotoModal = (photoData) => {
    setOpenPhotoModal(!openPhotoModal);
    setSelectedPhoto(photoData);
  };

  const allPhotos = Object.entries(allSecondaryImages);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <PhotosSecondaryPageWrap>
      <div className="PhotosSecondaryPage">
        <div className="all-photos-secondary">
          {allPhotos.map((photo) => {
            const photoData = photo[1];
            return (
              <React.Fragment>
                <img
                  className="photo-secondary"
                  src={photoData}
                  alt={photo[0]}
                  onClick={() => handleOpenPhotoModal(photoData)}
                />
                {openPhotoModal ? (
                  <PhotoModal
                    selectedPhoto={selectedPhoto}
                    setOpenPhotoModal={setOpenPhotoModal}
                  />
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </PhotosSecondaryPageWrap>
  );
};

export default PhotosSecondaryPage;
