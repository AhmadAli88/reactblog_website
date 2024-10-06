import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your email"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
        />
        <button className="loginButtton">Login</button>
      </form>
      <button className="loginRegisterButton">Register Now!</button>
    </div>
  );
};

export default Login;
