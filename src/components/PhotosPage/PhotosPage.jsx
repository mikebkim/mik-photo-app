import React, { useState } from "react";
import { PhotosPageWrap } from "./Photos.Page";
import PhotoModal from "../PhotoModal/PhotoModal";

const PhotosPage = ({ allImages }) => {
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const handleOpenPhotoModal = (photoData) => {
    setOpenPhotoModal(!openPhotoModal);
    setSelectedPhoto(photoData);
  };

  const allPhotos = Object.entries(allImages);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          {allPhotos.map((photo) => {
            const photoData = photo[1];
            return (
              <React.Fragment>
                <img
                  className="photo"
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
    </PhotosPageWrap>
  );
};

export default PhotosPage;
