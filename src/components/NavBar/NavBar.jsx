import React from "react";
import logo1 from "../../image/logo1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo1} alt="" />
          <nav>
            <Link to="/menu">
            <h3 style={{ color: "#164B4B" }}>Home</h3>
            </Link>
            <Link to="/admin">
              <h3>Admin</h3>
            </Link>
            <h3>Favorite</h3>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
