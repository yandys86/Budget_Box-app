import React from "react";

import Header from "../components/Common/Header";
import Grafics from "../components/Common/Grafics";
import Register from "../components/Common/Register";
const index = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="textos">
          <h1>Sign up and manage your Budget.</h1>
          <h3>
            <br />
            Note down your expenditure and income, <br />
            then check your balance everyday
          </h3>
          <Register />
        </div>

        <Grafics />
      </div>
    </>
  );
};

export default index;
