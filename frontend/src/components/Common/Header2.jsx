import React from "react";
import logo from "../../assets/img/logo.png";
import imgArrow from "../../assets/img/arrow_drop_down_white.png";
export default function Header2() {
  return (
    <>
      <div className="header-dashboard">
        <a href="/" id="logo">
          <img src={logo} alt="" />
        </a>
        <div>
          <button className="sign-btn">
            User Name
            <a href="MenuContainer">
              {" "}
              <img className="arrow" src={imgArrow} alt="" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
