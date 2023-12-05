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
  function importIcelandyAll(r) {
    let imagesIceland = {};
    r.keys().forEach((item, index) => {
      imagesIceland[item.replace("./", "")] = r(item);
    });
    return imagesIceland;
  }

  const allIcelandImages = importIcelandyAll(
    require.context("./imagesIceland", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/photos" element={<PhotosPage allIcelandImages={allIcelandImages} />} />
          <Route
            exact
            path="/photos/iceland"
            element={
              <PhotosSecondaryPage allIcelandImages={allIcelandImages} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
