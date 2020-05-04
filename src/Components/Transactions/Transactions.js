import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Transactions.css";
import imageresponse from "../images/hammock.PNG";
import TotalTransaction from './totaltransaction'


class previoustransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    
 if(this.state.showComponent){
  this.setState({
    showComponent:false
    
  });
}
else{
  this.setState({
    showComponent:true
  });
}
  }

render(){
  return (
    <div className="paymentIt">
     
    
      <div className="pay">
        <h3 id="fontIt">Payments & Actions</h3>
      </div>
      <h3 id="fontIt">Previous Transaction</h3>
      <div className="row">
        <div className={`${this.state.showComponent ? "col-6" : "col-12"}`} >
        <table className="table adjustIt">
        <thead>
          <tr >
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Taken</th>
            <th scope="col">Receipt URL</th>

          </tr>
          <div>

          </div>
        </thead>
        <tbody>
         
          <tr onClick={this._onButtonClick}>
           
            <th scope="row"id="fontIt" >$99</th>
            <td>4/08/2020</td>
            <td>6:14:08 PM</td>
            <td><a href="#" style={{textDecoration:"underline"}}>Receipt</a></td>
            
          </tr>
          
         
          <tr  onClick={this._onButtonClick}>
            <th scope="row" id="fontIt">$99</th>
            <td>4/08/2020</td>
            <td>6:14:08 PM</td>
            <td><a href="#" style={{textDecoration:"underline"}}>Receipt</a></td>

            <div>

            </div>
          </tr>
          <tr  onClick={this._onButtonClick}>
            <th scope="row" id="fontIt">$99</th>
            <td>4/08/2020</td>
            <td>6:14:08 PM</td>
            <td><a href="#" style={{textDecoration:"underline"}}>Receipt</a></td>

            <div>

            </div>
          </tr>
        </tbody>
      </table>
      
        </div>
        {this.state.showComponent && <div className="col-6">
           <TotalTransaction />
            </div>}
      </div>

    </div>
  );
}
}
export default previoustransaction;
