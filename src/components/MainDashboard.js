import React, { useState, useEffect } from "react";
import { Button, Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import DashboardMenuItem from "./DashboardMenuItem";

export default function MainDashboard() {
  // const [name,setName] = useState(0)
  // const setMyName = ()=>{
  //     setName(name + 1)
  // }
  // const nameArray = ["John", "Alex", "Shai"]

  // useEffect(()=>{

  //     if(name === nameArray.length) {
  //         setName(0)
  //     }

  // }, [name])

  return (
    <div className="square-container">
      <DashboardMenuItem name="Video Feeds" link="/videofeeds" />
      <DashboardMenuItem name="Sensor Status" link="/sensorstatus" />
      <DashboardMenuItem name="Add New Sensor" link="/newsensor" />
      <DashboardMenuItem name="History" link="/history" />
      <DashboardMenuItem name="Arm" link="/arm" />
      <DashboardMenuItem name="Disarm" link="/disarm" />
    </div>
  );
}
