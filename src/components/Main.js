import React from "react";
import { Switch, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard";
import Status from "./Status";
import RegistrationStats from "./RegistrationStats";

// The Main component renders one of the provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainDashboard} />
      <Route path="/status" component={Status} />
      <Route path="/registration-stats" component={RegistrationStats} />
    </Switch>
  </main>
);

export default Main;
