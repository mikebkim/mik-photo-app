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

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/photos" element={<PhotosPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
