import React from "react";
import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <a href="./">
          <img src={logo} alt="" />
        </a>
        <div className="sign">
          <div>
            <a href="login">Sign in</a>
          </div>
          <div>
            <a href="./register">Sign UP</a>
          </div>
        </div>
      </div>
    </>
  );
}
