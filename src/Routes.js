import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import List from "./pages/List";
import Report from "./pages/Report";
import ReportNav from "./pages/ReportNav";
import Login from "./pages/Login";
import GridTest from "./pages/GridTest";
import AddRemoveLayout from "./pages/GridTest2";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route path='/main/:user' component={HomePage} />
        <Route path='/list/:user' component={List} />
        <Route path='/report_nav/:user' component={ReportNav} />
        <Route path='/forms/report/:user/:ticker' component={Report} />
        <Route path='/grid_test' component={GridTest} />
        <Route path='/grid_test2' component={AddRemoveLayout} />

        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
