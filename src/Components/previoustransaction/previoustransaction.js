import React from 'react';
import'bootstrap/dist/css/bootstrap.css';
import './previoustransactionmin.css'
import Header from '../header/header'
import hammock from '../images/hammock.PNG'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function previoustransaction(){
    return(
        <div  className="paymentIt">
          	 <div className="d-flex justify-content-center">
                        <img src={hammock} />
                      </div>
            <div className="pay">
            <h3>Payments & Actions</h3>
            </div>
            <h3>Previous Transaction</h3>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Amount</th> 
      <th scope="col">Date</th>
      <th scope="col">Taken</th>
      <th scope="col">Recipt URL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">$99</th>
      <td>4/08/2020</td>
      <td>6:14:08 PM</td>
      <td><a href="#" style={{textDecoration:"underline"}}>Receipt</a></td>
    </tr>
    <tr>
      <th scope="row">$99</th>
      <td>4/08/2020</td>
      <td>6:14:08 PM</td>
      <td><a href="#" style={{textDecoration:"underline"}}>Receipt</a></td>
    </tr>
    <tr>
      <th scope="row">$99</th>
      <td>4/08/2020</td>
      <td>6:14:08 PM</td>
      <td><a href="#" style={{textDecoration:"underline"}}>Receipt</a></td>
    </tr>
  </tbody>
</table>
        </div>
    );
}
export default previoustransaction;