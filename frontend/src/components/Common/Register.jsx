import React from "react";

export default function Register() {
  return (
    <>
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
    </>
  );
}
