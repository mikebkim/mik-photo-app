import React from "react";
import { PhotosPageWrap } from "./Photos.Page";
// import PhotoModal from "../PhotoModal/PhotoModal";
import { Link } from "react-router-dom";

const PhotosPage = ({ allIcelandImages }) => {
  // const [openPhotoModal, setOpenPhotoModal] = useState(false);
  // const handleOpenPhotoModal = (photoData) => {
  //   setSelectedPhoto(photoData);
  //   setOpenPhotoModal(!openPhotoModal);
  // };

  const allIcelandPhotos = Object.entries(allIcelandImages);

  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          <div className="iceland-photos photos-column">
            <Link to="/photos/iceland" className="location-link">
              <h2>ICELAND</h2>

              <img className="photo" src={allIcelandPhotos[0][1]} alt={""} />
              {/* {allIcelandPhotos.map((photo) => {
              const photoData = photo[1];
              return (
                <React.Fragment>
                  <img
                    className="photo"
                    src={photoData}
                    alt={photo[0]}
                    onClick={() => handleOpenPhotoModal(photoData)}
                  />
                </React.Fragment>
              );
            })} */}
            </Link>
          </div>
          <div className="japan-photos photos-column">
            <Link to="/photos/iceland" className="location-link">
              <h2>JAPAN</h2>
              <img className="photo" src={allIcelandPhotos[6][1]} alt={""} />
              {/* {allIcelandPhotos.map((photo) => {
              const photoData = photo[1];
              return (
                <React.Fragment>
                  <img
                    className="photo"
                    src={photoData}
                    alt={photo[0]}
                    onClick={() => handleOpenPhotoModal(photoData)}
                  />
                </React.Fragment>
              );
            })} */}
            </Link>
          </div>
          <div className="losangeles-photos photos-column">
            <Link to="/photos/iceland" className="location-link">
              <h2>LOS ANGELES</h2>
              <img className="photo" src={allIcelandPhotos[1][1]} alt={""} />
              {/* {allIcelandPhotos.map((photo) => {
              const photoData = photo[1];
              return (
                <React.Fragment>
                  <img
                    className="photo"
                    src={photoData}
                    alt={photo[0]}
                    onClick={() => handleOpenPhotoModal(photoData)}
                  />
                </React.Fragment>
              );
            })} */}
            </Link>
          </div>

          {/* {openPhotoModal ? (
            <PhotoModal
              selectedPhoto={selectedPhoto}
              setOpenPhotoModal={setOpenPhotoModal}
            />
          ) : (
            ""
          )} */}
        </div>
      </div>
    </PhotosPageWrap>
  );
};

export default PhotosPage;
