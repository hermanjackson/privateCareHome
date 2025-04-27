import React ,{ useState, useEffect } from "react";
import { BrowserRouter, Route, Switch,Redirect  } from "react-router-dom";
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
import AdminLogin from './front/AdminLogin';
import AdminDashboard from './front/AdminDashboard.js';


function App() {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');

  useEffect(() => {
    // Watch token changes
    if (!token) {
      localStorage.removeItem('adminToken');
    }
  }, [token]);

  
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
          {/* Admin login page */}
        <Route exact path="/admin/login">
          {token ? <Redirect to="/admin/dashboard" /> : <AdminLogin setToken={setToken} />}
        </Route>
          {/* Admin dashboard page */}
          <Route exact path="/admin/dashboard">
          {token ? <AdminDashboard token={token} /> : <Redirect to="/admin/login" />}
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
          <Route path="*">
          <h2>404 Not Found</h2>
        </Route>
        
        </Switch>
        <Footer/>
      
    </BrowserRouter>
  </div>
  );
}

export default injectContext(App);