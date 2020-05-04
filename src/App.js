import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import logo from './logo.svg';
import "font-awesome/css/font-awesome.min.css";
import './App.css';
import Searchcart from "./components/searchcart/searchcart";
import Previoustransaction from "./components/previoustransaction/previoustransaction";
import Settings from "./components/settings/settings";
import Login from "./components/login/Login"
import "../node_modules/font-awesome/css/font-awesome.min.css";
import  Info from "./components/info/info"
import ProductTitle from "./components/producttitle/producttitle"
import Search from "./components/search/search"
import Form from "./components/TemplateForm/TemplateForm"
import Transactions from "./components/Transactions/Transactions"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"
import AgentNumber from "./components/AgentNumber/AgentNumber"
import AgentApp from "./components/AgentList/AgentApp"
function App() {
  return (
    <div>
      <Router>
      <Route exact path="/info" component={Info} />
      <Route exact path="/product" component={ProductTitle} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/setting" component={Settings} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/agent" component={AgentNumber} />

      <Route exact path="/agentapp" component={AgentApp} />


      

      <Route exact path="/searchcart" component={Searchcart} />
      <Route exact path="/login" component={Login} />


      <Route exact path="/previoustransaction" component={Transactions} />
      <Route exact path="/" component={() => <Redirect to="/login" />} />



      


      </Router>
    </div>
  );
}

export default App;
