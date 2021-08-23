import React from "react";
import { Switch, Route } from "react-router-dom";

import { ResetPassword } from "../../views/auth/ResetPassword";
import { SignIn } from "../../views/auth/SignIn";
import UserSignIn from "../../views/auth/UserSignIn";
import UserSelect from "../../views/auth/UserSelect";


export const Auth = () => {
  return (
    <Switch>
      <Route path="/auth/signin">
        <SignIn />
      </Route>

      <Route path="/auth/reset">
        <ResetPassword />
      </Route>

      <Route path="/auth/select">
        <UserSelect />
      </Route>

      <Route path="/auth/auto">
        <UserSignIn />
      </Route>

      <Route path="/recovery_token">
        <div>ABC</div>
      </Route>
    </Switch>
  );
};

export default Auth;