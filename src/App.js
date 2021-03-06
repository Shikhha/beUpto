import React from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavMain from "./components/layout/NavMain";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Welcome from "./components/layout/Welcome";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavMain />
        <Switch>
          <Route path="/" component={Welcome} exact={true} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/detail/:id" component={ProjectDetails} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
