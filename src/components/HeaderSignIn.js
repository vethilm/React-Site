import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../logo 1.png";
import SignIn from "../App";

function NavItem({ label }) {
  return <div className="navItem">{label}</div>;
}

function HeaderSignIn() {
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
        <div className="right-items">
          <Link to="/About">
            <NavItem label="About" />
          </Link>
          <SignIn className="log-in">Log In</SignIn>
          <button className="sign-up">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderSignIn;
