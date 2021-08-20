import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { context as authContext } from '../../hooks/useAuth'; 

import { Demos } from './App.Demo';
import { LandingPage } from "../../views/auth/LandingPage";
import { NewAccount } from "../../views/auth/NewAccount";
import { ResetPassword } from "../../views/auth/ResetPassword";
import { SignIn } from "../../views/auth/SignIn";
import { EmailSent } from "../../views/general/EmailSent";
import UserSignIn from "../../views/auth/UserSignIn";
import UserSelect from "../../views/auth/UserSelect";

import { ItemsList } from "../../views/ItemsList"

const Create = () => {
  return (
    <Switch>
<Route path="/create/name">
 <.. />
 </Route>

<Route path="/create/photo">
<.. />
</Route>

<Route path="/create/sync">
<.. />
</Route>

<Route path="/create/email">
<.. />
</Route>

<Route path="/create/password">
<.. />
</Route>

<Route path="/create/sent">
<.../>
</Route>

</Switch>
  )
}


const Demos = () => {
  return (
    <Switch>

<Route path="/demo/item-preview">
        <ItemPreview />
      </Route>

      <Route path="/demo/button">
        <ButtonDemo />
      </Route>

      <Route path="/demo/checkbox">
        <CheckboxDemo />
      </Route>

      <Route path="/demo/image">
        <ImageDemo />
      </Route>

      <Route path="/demo/input">
        <InputDemo />
      </Route>

      {/* <Route path="/demo/layout">
        <LayoutDemo />
      </Route> */}

      <Route path="/demo/link">
        <LinkDemo />
      </Route>

      <Route path="/demo/text">
        <TextDemo />
      </Route>

      <Route path="/demo/alert">
        <AlertDemo />
      </Route>
    </Switch>
  );
};

const Auth = () => {
  return (
    <Switch>
      <Route path="/auth/register">
        <NewAccount />
      </Route>

      <Route path="/auth/signin">
        <SignIn />
      </Route>

      <Route path="/auth/reset">
        <ResetPassword />
      </Route>

      <Route path="/auth/sent">
        <EmailSent />
      </Route>

      <Route path="/auth/select">
        <UserSelect />
      </Route>

      <Route path="/auth/auto">
        <UserSignIn />
      </Route>
    </Switch>
  );
};

const Items = () => {
  return (
    <Switch>
      <Route path="/items/list">
        <ItemsList />
      </Route>
    </Switch>
  );
};

export const Routing = () => {
  const { loading, user } = useContext(authContext);

  if (loading) {
    return null;
  }

  return (
    <Switch>
      <Route path="/demo">
        <Demos />
      </Route>

      <Route path="/items">
      {user ? <Items /> :<LandingPage />}
      </Route>

      <Route path="/auth">
        {user ? <ItemsList /> : <Auth />}
      </Route>

      <Route path="/">
      {user ? <ItemsList /> : <LandingPage />}
      </Route>
    </Switch>
  );
};

export default Routing;
