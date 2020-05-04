import React from 'react'
import './totaltransactionmin.css'
function TotalTransaction(){
    return(<div>
        <div className="Paymentfortotal">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Amount</th>
      <th scope="col">Transaction</th>
      <th scope="col">Details</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" id="fontIt">$30</th>
      <td>Debit</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row" id="fontIt">$30</th>
      <td>Credit</td>
      <td>Thornton</td>
    </tr>
    <tr>
      <th scope="row" id="fontIt">$39</th>
      <td>UPI</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
</div>
    </div>);
}
export default TotalTransaction;