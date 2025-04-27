import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './front/home';
import { Navbars } from './components/navbars';
import injectContext from "./front/appContext";
import { Footer } from "./components/inc/footer.js";
import { Contact } from "./front/Contact";
import Login from "./front/Login.js";
import Signup from "./front/Signup.js";
import ForgotPassword from "./front/ForgotPassword.js";
import ResetPassword from "./front/ResetPassword.js";
import PrivateRoute from "./front/PrivateRoute.js";
import Dashboard from "./front/Dashboard.js";
import "./App.css";
import { Breadcrumb } from "./components/breadCrumb";
import { Aboutus } from "./front/About";
import {Allservice} from "./front/Allservice.js";

function App() {
  
  return (
    <div className="d-flex flex-column h-100">
    <BrowserRouter >
      <Breadcrumb/>   
        <Navbars />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <Aboutus />
          </Route>
          <Route path="/Dashboard" component={Dashboard}>
            <PrivateRoute />
          </Route>
          <Route exact path="/Contact">
            < Contact />
          </Route>
          <Route exact path="/Login">
            <Login/>
          </Route>
          <Route exact path="/Signup"  >
          <Signup/>
          </Route>
          < Route exact path="/ForgotPassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/ResetPassword/:token" component={ResetPassword} />
          
          <Route path="/allservices" component={Allservice} />
        
        </Switch>
        <Footer/>
      
    </BrowserRouter>
  </div>
  );
}

export default injectContext(App);