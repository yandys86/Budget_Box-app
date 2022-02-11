import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUpError } from "../../reducks/users/actions";
import { signUp } from "../../reducks/users/operations";
import { getUser } from "../../reducks/users/selectors";

export default function Register() {
  let history = useHistory();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const errors = getUser(selector).errors;

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    if (values.password !== values.password_confirmation) {
      dispatch(signUpError({ password: ["Password are not the same."] }));
      return;
    }

    setIsLoading(true);
    await dispatch(signUp(values));
    setIsLoading(false);
    history.push("/");
  };

  return (
    <>
      <div className="profile">
        <form className="form-container">
          <label class="profile-input-label" for="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            class="profile-input"
            placeholder="Type your name"
            value={values.name}
            onChange={handleInputChange}
          ></input>
          <label class="profile-input-label" for="email">
            Mail Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            class="profile-input"
            placeholder="Type your mail address"
            value={values.email}
            onChange={handleInputChange}
          ></input>{" "}
          {errors.email ? (
            <span className="error-text">{errors.email[0]}</span>
          ) : null}
          <label class="profile-input-label" for="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Type Password"
            value={values.password}
            onChange={handleInputChange}
            name="password"
            class="profile-input"
          />
          <label class="profile-input-label" for="password_confirmation">
            Re-Password
          </label>
          <input
            name="password_confirmation"
            type="password"
            placeholder="Re-type Password"
            class="profile-input"
            value={values.password_confirmation}
            onChange={handleInputChange}
          />
          <br />
          {errors.password ? (
            <span className="error-text">{errors.password[0]}</span>
          ) : null}
          <button type="button" class="custom-btn" onClick={onSubmit}>
            {isLoading ? "Registering..." : "Register"}
            Done
          </button>
        </form>
      </div>
    </>
  );
}
