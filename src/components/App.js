import React, { useState } from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import EventPage from "./event/EventPage";
import AboutUsPage from "./about_us/AboutUsPage";
import MemberPage from "./member/MemberPage";
import BlogPage from "./blog/BlogPage";
import ContacPage from "./contacts/ContactPage";
import BlogDetail from "./blog/BlogDetail";
import ErrorPage from "./404/ErrorPage";
import CustomRoute from "./CustomRoute";
import login from "../admin/component/login/Login";
import Dashboard from "../admin/component/dashboard/Dashboard";
import ResponsiveMenu from "./responsive_menu/ResponsiveMenu";
import EventSingle from "./event/EventSingle";
import SubmitEvent from "./event/SubmitEvent";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <CustomRoute path="/" exact component={Home} />
          <CustomRoute path="/events" exact component={EventPage} />
          <CustomRoute path="/about" exact component={AboutUsPage} />
          <CustomRoute path="/members" exact component={MemberPage} />
          <CustomRoute path="/blogs" exact component={BlogPage} />
          <CustomRoute path="/contacts" exact component={ContacPage} />
          <CustomRoute
            path="/events/machine-learning"
            exact
            component={EventSingle}
          />
          <Route path="/events/submit" exact component={SubmitEvent} />

          <Route path="/admin/login" exact component={login} />
          <Route path="/admin/dashboard" exact component={Dashboard} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
