import React from "react";
import "./sidebar.css";
import { IMAGES } from "../../assets/images";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src={IMAGES.PIC2} className="sidebarImage" alt="" srcset="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          libero nesciunt atque ex eveniet itaque repellendus pariatur,
          temporibus non ullam!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Work</li>
          <li className="sidebarListItem">Education</li>
          <li className="sidebarListItem">Personal Growth</li>
          <li className="sidebarListItem">Personal Development</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
