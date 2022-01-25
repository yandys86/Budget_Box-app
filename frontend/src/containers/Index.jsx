import React from "react";

import Header from "../components/Common/Header";
import Grafics from "../components/Common/Grafics";
//import Register from "../components/Common/Register";
const index = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="textos">
          <h1>Sign up and manage your Budget.</h1>
          <h3>
            <br />
            Note down your expenditure and income, <br />
            then check your balance everyday
          </h3>
          <div className="register">
            <h5>Email address</h5>
            <input type="text" placeholder="Type your Email " />
            <h5>Password</h5>
            <input type="Password" placeholder="Type Password" />
            <br />
            <input type="Password" placeholder="Re-type Password" />
            <br />
            <a href="addTransationButton.html">
              <button>Register</button>
            </a>
            <a href="addTransationButton.html" className="registerNow">
              <button>Register Now</button>
            </a>
          </div>
        </div>
        <Grafics />
      </div>
    </div>
  );
};

export default index;
