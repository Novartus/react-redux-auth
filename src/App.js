import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import History from "./History";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import Register from "./containers/Register";

function App() {
  // return <div className="App">Hi</div>;
  return (
    <Router history={History}>
      <React.Fragment>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/login"}
            exact
            component={Login}
          />
          <Route
            path={process.env.PUBLIC_URL + "/signUp"}
            exact
            component={Register}
          />
          <ProtectedRoute
            path={process.env.PUBLIC_URL + "/dashboard"}
            exact
            component={Dashboard}
          />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
