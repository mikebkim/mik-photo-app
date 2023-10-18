import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarWrap } from "./Nav.Bar";

const NavBar = (props) => {
  const [selectedTab, setSelectedTab] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [secondaryDropdownVisible, setSecondaryDropdownVisible] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    setSelectedTab(JSON.stringify(location));
  }, [location]);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setSecondaryDropdownVisible(false);
  };

  const handlSecondaryeMouseEnter = () => {
    setSecondaryDropdownVisible(true);
  };

  const photosSecondaryDropdown = (
    <div className="photos-dropdown-secondary">
      <div className="dropdown-items-secondary">
        <Link
          to="/photos/losangeles"
          className="dropdown-item-secondary"
        >
          LOS ANGELES
        </Link>
        <div
          className="dropdown-item-secondary"
          // onClick={() => handlSecondaryeMouseEnter()}
        >
          Iceland
        </div>
      </div>
    </div>
  );

  const photosDropdown = (
    <div className="photos-dropdown">
      <div className="dropdown-items">
        <div
          className="dropdown-item"
          onClick={() => handlSecondaryeMouseEnter()}
        >
          2023
          {secondaryDropdownVisible ? photosSecondaryDropdown : null}
        </div>
        <div className="dropdown-item">2024</div>
      </div>
    </div>
  );

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
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            PHOTOS
            {dropdownVisible && photosDropdown}
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
