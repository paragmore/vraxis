import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";


import { useParams, useLocation, Route } from "react-router";
import Projects from "./Projects/Projects";
import MyAccount from "./MyAccount/MyAccount";

// import {URL} from "../../url"
function Dashboard() {


  return (
    <div style={{ display: "flex", marginTop: "10vh" }}>
      <div class="container-fluid">
        <div class="row">
          <div>
            <Sidebar />
          </div>
          <Route path="/dashboard/projects" component={Projects} />
          <Route  path="/dashboard/myaccount" component={MyAccount} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
