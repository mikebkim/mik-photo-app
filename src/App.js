import React, { useState } from "react";
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
import Patagonia4 from "./Patagonia4.jpg";

const App = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      unlockPage();
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsError(false); // Reset error message when password is changed
  };

  const unlockPage = () => {
    // Check if the password is correct
    if (password === "G1oriou$") {
      setIsUnlocked(true);
    } else {
      setIsUnlocked(false);
      setIsError(true); // Set error message to be displayed
    }
  };

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
      {!isUnlocked ? (
        <img className="password-image" src={Patagonia4} alt="Lofoten" />
      ) : null}
      {isError && (
        <div className="error-message">
          <span>Incorrect password</span>
          <span>Please try again</span>
        </div>
      )}
      {!isUnlocked ? (
        <div className="password-form">
          <div className="password-input">
            <input
              className="text-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyPress}
            />
            <button className="password-button" onClick={unlockPage}>
              Unlock
            </button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
