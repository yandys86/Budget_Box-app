import React from "react";

export default function Register() {
  return (
    <>
      <div className="profile">
        <form className="form-container">
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
          <label class="profile-input-label" for="name">
            Password
          </label>
          <input
            type="Password"
            placeholder="Type Password"
            class="profile-input"
          />
          <label class="profile-input-label" for="name">
            Re-Password
          </label>
          <input
            type="Password"
            placeholder="Re-type Password"
            class="profile-input"
          />
          <br />

          <button type="button" class="custom-btn">
            Done
          </button>
        </form>
      </div>
    </>
  );
}
