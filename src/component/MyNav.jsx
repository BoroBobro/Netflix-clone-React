import React from "react";
import "./MyNav.css";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <nav className="netflix-nav">
      <div className="nav-left">
        <div className="nav-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </div>
        <ul className="nav-links">
          <li style={{color:"white"}}><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/tv-shows">TV Shows</Link></li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="nav-profile">
              <i className="bi bi-search"></i>
        <div id="kids" className="fw-bold">KIDS</div>
        <i className="bi bi-bell"></i>
        <i className="bi bi-person-circle"></i>
      
      </div>
    </nav>
  );
};

export default MyNav;