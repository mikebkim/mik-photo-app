import React, { useState } from "react";
import { PhotosSecondaryPageWrap } from "./Photos.Secondary.Page";
import PhotoModal from "../PhotoModal/PhotoModal";
import { useLocation } from "react-router-dom";

const PhotosSecondaryPage = ({ allPhotos, selectedLocation }) => {
  // Access the current location object
  const location = useLocation();

  // Access specific properties of the location object
  const { pathname } = location;

  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const handleOpenPhotoModal = (photoData) => {
    setSelectedPhoto(photoData);
    setOpenPhotoModal(!openPhotoModal);
  };

  const photos = Object.entries(allPhotos);

  const filteredPhotos = photos.filter((photo) =>
    photo[0].toLocaleLowerCase().includes(pathname.replace(/^\/photos\//, ""))
  );

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <PhotosSecondaryPageWrap>
      <div className="PhotosSecondaryPage">
        <div className="all-photos-secondary">
          {filteredPhotos.map((photo) => {
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
