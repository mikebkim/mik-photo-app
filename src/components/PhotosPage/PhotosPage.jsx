import React, { useState } from "react";
import { PhotosPageWrap } from "./Photos.Page";
import PhotoModal from "../PhotoModal/PhotoModal";
// import photospageplaceholder from "./AllPhotos/photospageplaceholder.png";
// import mario from "./AllPhotos/mario.png";
// import pikachu from "./AllPhotos/pikachu.png";

const PhotosPage = ({ allImages }) => {
  // const [allPhotos, setAllPhotos] = useState([photospageplaceholder]);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const handleOpenPhotoModal = (photo) => {
    setOpenPhotoModal(!openPhotoModal);
    setSelectedPhoto(photo);
  };

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const allPhotos = Object.entries(allImages);

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          {allPhotos.map((photo, index) => {
            return (
              <React.Fragment>
                <img
                  className="photo"
                  src={photo[1]}
                  onClick={() => handleOpenPhotoModal(photo)}
                />
                {openPhotoModal ? (
                  <PhotoModal
                    photo={selectedPhoto}
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
