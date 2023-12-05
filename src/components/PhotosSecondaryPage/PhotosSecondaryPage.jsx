import React, { useState } from "react";
import { PhotosSecondaryPageWrap } from "./Photos.Secondary.Page";
import PhotoModal from "../PhotoModal/PhotoModal";

const PhotosSecondaryPage = ({ allIcelandImages }) => {
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const handleOpenPhotoModal = (photoData) => {
    setSelectedPhoto(photoData);
    setOpenPhotoModal(!openPhotoModal);
  };

  const allIcelandPhotos = Object.entries(allIcelandImages);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <PhotosSecondaryPageWrap>
      <div className="PhotosSecondaryPage">
        <div className="all-photos-secondary">
          {allIcelandPhotos.map((photo) => {
            const photoData = photo[1];
            return (
              <React.Fragment>
                <img
                  className="photo-secondary"
                  src={photoData}
                  alt={photo[0]}
                  onClick={() => handleOpenPhotoModal(photoData)}
                />
              </React.Fragment>
            );
          })}
          {openPhotoModal ? (
            <PhotoModal
              selectedPhoto={selectedPhoto}
              setOpenPhotoModal={setOpenPhotoModal}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </PhotosSecondaryPageWrap>
  );
};

export default PhotosSecondaryPage;
