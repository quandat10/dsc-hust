import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./header/Header";

const CustomRoute = ({ component: Component, ...rest }) => (
  <div>
    <Header />
    <Route
      {...rest}
      component={(props) => {
        return <Component {...props} />;
      }}
    />
  </div>
);

export default CustomRoute;
