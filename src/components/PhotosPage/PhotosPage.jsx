import React from "react";
import { PhotosPageWrap } from "./Photos.Page";
// import PhotoModal from "../PhotoModal/PhotoModal";
import { Link } from "react-router-dom";

const PhotosPage = ({ allPhotos }) => {
  // const [openPhotoModal, setOpenPhotoModal] = useState(false);
  // const handleOpenPhotoModal = (photoData) => {
  //   setSelectedPhoto(photoData);
  //   setOpenPhotoModal(!openPhotoModal);
  // };

  const photos = Object.entries(allPhotos);

  // const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <PhotosPageWrap>
      <div className="PhotosPage">
        <div className="all-photos">
          <div className="iceland-photos photos-column">
            <Link to="/photos/iceland" className="location-link">
              <h2>ICELAND</h2>
              <img className="photo" src={photos[0][1]} alt={""} />
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
          <div className="greenland-photos photos-column">
            <Link to="/photos/greenland" className="location-link">
              <h2>GREENLAND</h2>
              <img className="photo" src={photos[0][1]} alt={""} />
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
            <Link to="/photos/patagonia" className="location-link">
              <h2>PATAGONIA</h2>
              <img className="photo" src={photos[0][1]} alt={""} />
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
