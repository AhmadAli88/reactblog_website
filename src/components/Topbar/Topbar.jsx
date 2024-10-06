import React from "react";
import "./topbar.css";

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
          <div className="topListItem">Home</div>
          <div className="topListItem">About</div>
          <div className="topListItem">Contact</div>
          <div className="topListItem">Write</div>
          <div className="topListItem">Logout</div>
        </div>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          alt=""
          srcset=""
        />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
