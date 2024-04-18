import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";
import MainDashboard from "./components/MainDashboard";
import Settings from "./components/Settings";
import History from "./components/History";
import NewSensor from "./components/NewSensor";
import SensorStatus from "./components/SensorStatus";
import Arm from "./components/Arm";
import Disarm from "./components/Disarm";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          {/* Primary route for landing (until login page added) */}
          <Route path={["/", "/dashboard"]} exact>
            <MainDashboard />
          </Route>
          <Route path="/settings" exact>
            <Settings />
          </Route>
          <Route path="/history" exact>
            <History />
          </Route>
          <Route path="/newsensor" exact>
            <NewSensor />
          </Route>
          <Route path="/sensorstatus" exact>
            <SensorStatus />
          </Route>
          <Route path="/arm" exact>
            <Arm />
          </Route>
          <Route path="/disarm" exact>
            <Disarm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
