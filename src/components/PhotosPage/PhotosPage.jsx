import React, { useState } from "react";
import { PhotosPageWrap } from "./Photos.Page";
import PhotoModal from "../PhotoModal/PhotoModal";
// import photospageplaceholder from "./AllPhotos/photospageplaceholder.png";
// import mario from "./AllPhotos/mario.png";
// import pikachu from "./AllPhotos/pikachu.png";

const PhotosPage = ({ allImages }) => {
  // const [allPhotos, setAllPhotos] = useState([photospageplaceholder]);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const handleOpenPhotoModal = (photoData) => {
    setOpenPhotoModal(!openPhotoModal);
    setSelectedPhoto(photoData);
  };

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const allPhotos = Object.entries(allImages);

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
