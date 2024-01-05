import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBarWrap } from "./Nav.Bar";

const NavBar = (props) => {
  const [selectedTab, setSelectedTab] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setSelectedTab(JSON.stringify(location));
  }, [location]);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handlSecondaryeLeave = () => {
    setDropdownVisible(false);
  };

  const photosDropdown = (
    <div className="photos-dropdown">
      <div className="dropdown-items">
        <Link
          to="/photos/greenland"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          GREENLAND
        </Link>
        <Link
          to="/photos/iceland"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          ICELAND
        </Link>
        <Link
          to="/photos/lofoten"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          LOFOTEN
        </Link>
        <Link
          to="/photos/patagonia"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          PATAGONIA
        </Link>
        <Link
          to="/photos/seoul"
          className="dropdown-item"
          onClick={() => handlSecondaryeLeave()}
        >
          SEOUL
        </Link>
      </div>
    </div>
  );

  return (
    <NavBarWrap>
      <div className="NavBar">
        <h1>SEANNA KIM</h1>
        <div className="nav-links">
          <Link
            as={Link}
            to="/home"
            className={selectedTab.includes("home") ? "selected" : "nav-link"}
          >
            HOME
          </Link>
          <Link
            as={Link}
            to="/photos"
            className={selectedTab.includes("photos") ? "selected" : "nav-link"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            PHOTOS
            {dropdownVisible && photosDropdown}
          </Link>
          <Link
            as={Link}
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
