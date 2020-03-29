import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./Pages/Logon";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import NewIncident from "./Pages/NewIncident";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile}></Route>
        <Route path="/incidents/new" component={NewIncident}></Route>
      </Switch>
    </BrowserRouter>
  );
}
