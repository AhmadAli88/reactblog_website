import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { IMAGES } from "../../assets/images";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <div className="topList">
          <div className="topListItem"><Link to="/">Home</Link></div>
          <div className="topListItem"><Link to="/single">Single Post</Link></div>
          <div className="topListItem"><Link to="/write">Write Post</Link></div>
          <div className="topListItem"><Link to="/settings">Settings</Link></div>
          <div className="topListItem"><Link to="/login">Login</Link></div>
          <div className="topListItem"><Link to="/register">Register</Link></div>
        </div>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src={IMAGES.PIC1}
          alt=""
          srcset=""
        />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
