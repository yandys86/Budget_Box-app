import React from "react";
import Header from "../components/Common/Header";
import Register from "../components/Common/Register";

const register = () => {
  return (
    <>
      <div className="login-body">
        <Header />

        <div className="login-content">
          <div className="textos-login">
            <h1>Sing Up and manage your Budget</h1>
            <br />
            <h5>
              Note down your expenditure and income, <br />
              then check your balances everyday
            </h5>
          </div>

          <Register />
        </div>
      </div>
    </>
  );
};

export default register;
