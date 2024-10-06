import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
      <label htmlFor="">Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username"
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
        />
        <button className="registerButtton">register</button>
      </form>
      <button className="registerLoginButton">Register Now!</button>
    </div>
  );
};

export default Register;
