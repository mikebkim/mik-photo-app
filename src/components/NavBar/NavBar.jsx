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
        <Link
          to="/home"
          className={selectedTab.includes("home") ? "selected" : "nav-link"}
        >
          Home
        </Link>
        <Link
          to="/photos"
          className={selectedTab.includes("photos") ? "selected" : "nav-link"}
        >
          Photos
        </Link>
        <Link
          to="/contact"
          className={
            selectedTab.includes("contact") ? "selected" : "nav-link"
          }
        >
          Contact
        </Link>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
