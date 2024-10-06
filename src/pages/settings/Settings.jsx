import React from "react";
import "./settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IMAGES } from "../../assets/images";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your account</span>
          <span className="settingDeleteTitle">Delete your account</span>
        </div>
        <form action="" className="settingForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingPP">
            <img
              src={IMAGES.PIC17}
              className="settingPPImg"
              alt=""
              srcset=""
            />
            <label htmlFor="fileInput">
              <i class="settingPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ahmad" />
          <label>Email</label>
          <input type="email" placeholder="test@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
