import React from "react";

import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        path="/search/:zip"
        render={props => <Search key={props.match.params.zip} {...props} />}
      />
      <Route path="/home/:id" component={Home} />
    </Switch>
  );
};

export default Routes;
