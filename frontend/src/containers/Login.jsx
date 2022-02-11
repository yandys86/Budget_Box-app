import React, { useState } from "react";
import Header from "../components/Common/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signIn } from "../reducks/users/operations";
import { getUser } from "../reducks/users/selectors";

export default function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const selector = useSelector((state) => state);
  const errors = getUser(selector).errors;

  const initialValues = {
    email: "",
    password: "",
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
    setIsLoading(true);
    await dispatch(signIn(values, () => history.push("/")));
    setIsLoading(false);
    history.push("/");
  };

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
            <input
              placeholder="Type your email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleInputChange}
            />
            {errors.email ? (
              <span className="error-text">{errors.email[0]}</span>
            ) : null}
            <h5>Password</h5>
            <input
              placeholder="Type your password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleInputChange}
            />
            {errors.password ? (
              <span className="error-text">{errors.password[0]}</span>
            ) : null}
            <br />
            <br />
            <button type="button" className="custom-btn" onClick={onSubmit}>{`${
              isLoading ? "Logging In" : "Login"
            }`}</button>
          </div>
        </div>
      </div>
    </>
  );
}
