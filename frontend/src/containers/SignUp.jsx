import React from "react";
import Aside from "../components/Common/Aside";
import Header2 from "../components/Common/Header2";
import account_img from "../assets/img/account-add.png";
export default function SignUp() {
  return (
    <>
      <div className="dashboard-body">
        <Header2 />
        <Aside />
        <div className="account-box">
          <img src={account_img} alt="" />
          <h3>Add Profile Picture</h3>
          <h5>Name</h5>
          <input type="text" placeholder="Name " />
          <h5>Mail address</h5>
          <input type="text" placeholder="Type your Email address " />
          <h5>Password</h5>

          <input type="Password" placeholder="Type Password" />
          <br />
          <br />
          <a href="/">
            <button>Done</button>
          </a>
        </div>
      </div>
    </>
  );
}
