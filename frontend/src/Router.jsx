import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Index from "./containers/Index";
import Signin from "./containers/Login";
import SignUp from "./containers/SignUp";
import Dashboard from "./containers/dashboard";
import Transation from "./containers/transation";
import Register from "./containers/register";
import MenuContainer from "./components/Common/MenuContainer";
import Addform from "./containers/addform";
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
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/transation"} component={Transation} />
        <Route exact path={"/addform"} component={Addform} />
        <Route exact path={"/MenuContainer"} component={MenuContainer} />
        <Route exact path={"/register"} component={Register} />
      </Switch>
    </>
  );
};
export default Router;
