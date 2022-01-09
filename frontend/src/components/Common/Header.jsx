import React from "react";
import logo from "../../assets/img/logo.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="sign">
          <div>
            <a href="/Login">Sign in</a>
          </div>
          <div>
            <a href="/SignUp">Sign UP</a>
          </div>
        </div>
      </div>
    </>
  );
}
