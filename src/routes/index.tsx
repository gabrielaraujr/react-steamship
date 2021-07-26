import React from "react";
import { Switch, Route } from "react-router-dom";

import AuthRoutes from "./auth.routes";

import Login from "pages/login";
import Home from "pages/home";
import Cart from "pages/cart";
import Profile from "pages/profile";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <AuthRoutes path="/home" component={Home} />
      <AuthRoutes path="/cart" component={Cart} />
      <AuthRoutes path="/profile" component={Profile} />
    </Switch>
  );
}
