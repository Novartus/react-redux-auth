import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import store from "../store";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const isLoggedIn = store.getState().userReducer.isLoggedIn;
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      setLoggedIn(isLoggedIn);
    }
  }, [isLoggedIn]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
