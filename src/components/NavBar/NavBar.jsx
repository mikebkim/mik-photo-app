import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarWrap } from "./Nav.Bar";

const NavBar = (props) => {
  const [selectedTab, setSelectedTab] = useState("");

  const location = useLocation();

  useEffect(() => {
    setSelectedTab(JSON.stringify(location));
  }, [location]);

  return (
    <NavBarWrap>
      <div className="NavBar">
        <h1>SEANNA KIM</h1>
        <div className="nav-links">
          <Link
            to="/home"
            className={selectedTab.includes("home") ? "selected" : "nav-link"}
          >
            HOME
          </Link>
          <Link
            to="/photos"
            className={selectedTab.includes("photos") ? "selected" : "nav-link"}
          >
            PHOTOS
          </Link>
          <Link
            to="/contact"
            className={
              selectedTab.includes("contact") ? "selected" : "nav-link"
            }
          >
            CONTACT
          </Link>
        </div>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
