import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./components/Auth/Auth";
import Upload2D from "./components/Upload2D/Upload2D";
import ProjectScreen from "./components/ProjectScreen/ProjectScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import LoadingSpinner from "./components/LoadingSpinner";
import Demo from "./components/Demo/Demo";
import DemoScreen from "./components/Demo/DemoScreen/DemoScreen";

function App() {
  return (
    <BrowserRouter>
      <LoadingSpinner />
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/upload2d" exact component={Upload2D} />
        <Route path="/project3d" component={ProjectScreen}></Route>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/demo" exact component={Demo} />
        <Route path="/demoscreen" exact component={DemoScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
