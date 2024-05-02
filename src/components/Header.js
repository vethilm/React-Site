import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import "./header.css";
import logo from "../logo 1.png";
import arrow from "../icons/icons/chevron-black.png";
import { SignOut } from "../App";
import { useState, useRef, useEffect } from "react";
function NavItem({ label }) {
  return <div className="navItem">{label}</div>;
}

function Header() {
  const handleSearchSubmit = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }
    // Attach the listeners on component mount
    document.addEventListener("mousedown", handleClickOutside);
    // Detach the listeners on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <header>
      <nav>
        <div className="left-items">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
          <Link to="/Home">
            <NavItem label="Home" />
          </Link>
          <Link to="/Explore">
            <NavItem label="Explore" />
          </Link>
        </div>

        <SearchBar onSearchSubmit={handleSearchSubmit} />

        <div className="right-items">
          <Link to="/profile">
            <img className="profileImg" />
          </Link>
          <img className="arrow" src={arrow} onClick={toggleDropdown} />
        </div>
        <div
          className={`dropdown ${isDropdownVisible ? "visible" : ""}`}
          ref={dropdownRef}
        >
          <button className="menuBar">
            <Link to="/profile">
              <img className="profileImg" />
            </Link>
            <p>Your Account</p>
          </button>
          <button>Settings</button>
          <button>Notification</button>
          <button>Boards</button>
          <button>Switch Appearance</button>
          <SignOut />
        </div>
      </nav>
    </header>
  );
}

export default Header;
