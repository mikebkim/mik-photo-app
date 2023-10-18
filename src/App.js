import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import PhotosPage from "./components/PhotosPage/PhotosPage";
import PhotosSecondaryPage from "./components/PhotosSecondaryPage/PhotosSecondaryPage";

const App = () => {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const allImages = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg)$/)
  );

  function importSecondaryAll(r) {
    let imagesSecondary = {};
    r.keys().forEach((item, index) => {
      imagesSecondary[item.replace("./", "")] = r(item);
    });
    return imagesSecondary;
  }

  const allSecondaryImages = importSecondaryAll(
    require.context("./imagesSecondary", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route
            exact
            path="/photos"
            element={<PhotosPage allImages={allImages} />}
          />
          <Route
            exact
            path="/photos/losangeles"
            element={
              <PhotosSecondaryPage allSecondaryImages={allSecondaryImages} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
