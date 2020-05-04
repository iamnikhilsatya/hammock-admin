import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";

import {
  AddPayment,
  Editdomain,
  Passwords,
  Settings,
  Login,
  Signup,
  Searchcart,
  Templates,
  Transactions,
  TemplateForm,
} from "./Pages";
import Total from './Pages/Transactions/totaltransaction'
import Basiclist from './Pages/Listings/List'
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/total" component={Total} />
        <Route exact path="/basic" component={Basiclist} />


        <Route exact path="/passwords" component={Passwords} />
        <Route exact path="/editpasswords" component={Editdomain} />
        <Route exact path="/addpayment" component={AddPayment} />
        <Route exact path="/templates" component={Templates} />
        <Route exact path="/form" component={TemplateForm} />
        <Route exact path="/search" component={Searchcart} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/setting" component={Settings} />
        <Route exact path="/" component={() => <Redirect to="/signup" />} />
      </Router>
    </div>
  );
}

export default App;
