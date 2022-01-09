import React from "react";
import Header from "../components/Common/Header";

const Login = () => {
  return (
    <>
      <div className="login-body">
        <Header />

        <div className="login-content">
          <div className="textos-login">
            <h1>Login and manage your Budget</h1>
            <br />
            <h5>
              Note down your expenditure and income, <br />
              then check your balances everyday
            </h5>
          </div>

          <div className="login-box">
            <h5>Email address</h5>
            <input type="text" placeholder="Type your Email " />
            <h5>Password</h5>
            <input type="Password" placeholder="Type Password" />
            <br />
            <br />
            <a href="/">
              <button>Login</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
