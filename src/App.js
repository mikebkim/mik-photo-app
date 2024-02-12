import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import PhotosPage from "./components/PhotosPage/PhotosPage";
import PhotosSecondaryPage from "./components/PhotosSecondaryPage/PhotosSecondaryPage";

const App = () => {
  function importAllImages(r) {
    let allImages = {};
    r.keys().forEach((item, index) => {
      allImages[item.replace("./", "")] = r(item);
    });
    return allImages;
  }

  const allPhotos = importAllImages(
    require.context("./images", false, /\.(png|jpe?g|svg|jpg)$/)
  );

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route
            exact
            path="/photos"
            element={<PhotosPage allPhotos={allPhotos} />}
          />
          <Route
            exact
            path="/photos/iceland"
            element={<PhotosSecondaryPage allPhotos={allPhotos} />}
          />
          <Route
            exact
            path="/photos/greenland"
            element={<PhotosSecondaryPage allPhotos={allPhotos} />}
          />
          <Route
            exact
            path="/photos/patagonia"
            element={<PhotosSecondaryPage allPhotos={allPhotos} />}
          />
          <Route
            exact
            path="/photos/lofoten"
            element={<PhotosSecondaryPage allPhotos={allPhotos} />}
          />
          <Route
            exact
            path="/photos/seoul"
            element={<PhotosSecondaryPage allPhotos={allPhotos} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
