import React from "react";
import "./login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <h1 className="title">Login In</h1>
        <form onSubmit={""}>
          <div className="username">
            <label>Username</label>
            <input type="text" placeholder="Username..."></input>
          </div>
          <div className="pass">
            <label>Password</label>
            <input type="password" placeholder="Password..."></input>
          </div>
          <button className="btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
