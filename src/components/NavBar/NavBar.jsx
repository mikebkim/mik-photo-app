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

  const handlSecondaryEnter = () => {
    setSecondaryDropdownVisible(true);
  };

  const handlSecondaryeLeave = () => {
    setDropdownVisible(false);
    setSecondaryDropdownVisible(false);
  };

  const photosSecondaryDropdown = (
    <div className="photos-dropdown-secondary">
      <div className="dropdown-items-secondary">
        <Link
          to="/photos/losangeles"
          className="dropdown-item-secondary"
          onClick={() => handlSecondaryeLeave()}
        >
          LOS ANGELES
        </Link>
        {/* <Link
          to="/photos/losangeles"
          className="dropdown-item-secondary"
          onClick={() => handlSecondaryeLeave()}
        >
          ICELAND
        </Link> */}
      </div>
    </div>
  );

  const photosDropdown = (
    <div className="photos-dropdown">
      <div className="dropdown-items">
        <div className="dropdown-item" onMouseEnter={handlSecondaryEnter}>
          2023
          {secondaryDropdownVisible ? photosSecondaryDropdown : ""}
        </div>
        {/* <div
          className="dropdown-item"
          onMouseEnter={handlSecondaryEnter}
        >
          2024
          {secondaryDropdownVisible ? photosSecondaryDropdown : ""}
        </div> */}
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
