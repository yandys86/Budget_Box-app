import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Index from "./containers/Index";
import Signin from "./containers/Login";
import SignUp from "./containers/SignUp";
import { fetchUserFromLocalStorage } from "./reducks/users/operations";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./reducks/users/selectors";

const Router = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const token = user ? user.token : null;
  console.log("Token", token);
  useEffect(() => {
    dispatch(fetchUserFromLocalStorage());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Index} />
        <Route exact path={"/login"} component={Signin} />
        <Route exact path={"/signup"} component={SignUp} />
      </Switch>
    </>
  );
};
export default Router;
