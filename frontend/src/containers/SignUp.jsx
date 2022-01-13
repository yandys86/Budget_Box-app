import React, { useState } from "react";
import Aside from "../components/Common/Aside";
import Header2 from "../components/Common/Header2";
import account_img from "../assets/img/account-add.png";
import { signUp } from "../reducks/users/operations";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const dispatch = useDispatch();

  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="dashboard-body">
        <Header2 />
        <Aside />
        <div className="account-box">
          <img src={account_img} alt="" />
          <h3>Add Profile Picture</h3>
          <h5>Name</h5>
          <input
            type="text"
            onChange={inputUserName}
            name=""
            placeholder="User Name "
          />

          <h5>Mail address</h5>

          <input
            type="email"
            onChange={inputEmail}
            name=""
            placeholder="Type your Email address"
            id=""
          />
          <h5>Password</h5>

          <input
            type="password"
            onChange={inputPassword}
            name=""
            placeholder="Type Password"
            id=""
          />
          <br />
          <br />
          <a href="/">
            <button onClick={signUpButton}>Done</button>
          </a>
        </div>
      </div>
    </>
  );
}
