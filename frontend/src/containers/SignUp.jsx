import React, { useState } from "react";
import Aside from "../components/Common/Aside";
import Header2 from "../components/Common/Header2";
import account_img from "../assets/img/account-add.png";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signUpError } from "../reducks/users/actions";
import { signUp } from "../reducks/users/operations";
import { getUser } from "../reducks/users/selectors";

export default function SignUp() {
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
      <div className="dashboard-body">
        <Header2 />
        <div className="content-wrapper">
          <Aside />
          <div className="content">
            <div className="profile">
              <form className="form-container" action="#">
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
                  id="name"
                  type="text"
                  name="name"
                  class="profile-input"
                  placeholder="Type your name"
                  value={values.name}
                  onChange={handleInputChange}
                ></input>
                {errors.email ? (
                  <span className="error-text">{errors.email[0]}</span>
                ) : null}
                <label class="profile-input-label" for="name">
                  Mail Address
                </label>
                <input
                  type="email"
                  name="email"
                  class="profile-input"
                  placeholder="Type your mail address"
                ></input>
                <button type="button" class="custom-btn" onClick={onSubmit}>
                  {isLoading ? "Registering..." : "Register"}
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
