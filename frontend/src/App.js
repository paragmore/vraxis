import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import Auth from "./components/Auth/Auth";
import Upload2D from "./components/Upload2D/Upload2D";
import ProjectScreen from "./components/ProjectScreen/ProjectScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import LoadingSpinner from "./components/LoadingSpinner";
import Demo from "./components/Demo/Demo";
import DemoScreen from "./components/Demo/DemoScreen/DemoScreen";
import Pricing from "./components/LandingPage/components/Pricing/Pricing"

function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  return (
    <BrowserRouter>
      <LoadingSpinner />
      <Navbar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/upload2d" exact component={Upload2D} />
        <Route path="/project3d" component={ProjectScreen}></Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/demo" exact component={Demo} />
        <Route path="/demoscreen" exact component={DemoScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
