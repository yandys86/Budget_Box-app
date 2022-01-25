import React from "react";
import Aside from "../components/Common/Aside";
import Header2 from "../components/Common/Header2";
import account_img from "../assets/img/account-add.png";

export default function SignUp() {
  return (
    <>
      <div className="dashboard-body">
        <Header2 />
        <div className="content-wrapper">
          <Aside />
          <div className="content">
            <div className="profile">
              <form className="form-container">
                <img
                  name="image"
                  src={account_img}
                  alt="upload"
                  className="upload-area"
                  type="file"
                />
                <div class="upload-text">Add Profile Picture</div>
                <label class="profile-input-label" for="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="profile-input"
                  placeholder="Type your name"
                ></input>
                <label class="profile-input-label" for="name">
                  Mail Address
                </label>
                <input
                  type="email"
                  name="email"
                  class="profile-input"
                  placeholder="Type your mail address"
                ></input>
                <button type="button" class="custom-btn">
                  Done
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
