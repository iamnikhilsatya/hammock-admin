import React from "react";
import "./searchmin.css";
import hammock from "../images/hammock.PNG";
import { Link } from "react-router-dom";


function searchcart() {
  return (
    <div className="cartIt">
      
      <form>
				<div className="row">
					<div className="col">
						
					</div>
					<div className="col-5">
					<input type="text" name="searcheverything" id="searcheverything" className="form-control mb-3" 
					placeholder="SEARCH EVERYTHING"
					/>
					</div>
				</div>
			</form>
            
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="imageIt">
              #
            </th>
            <th scope="col" className="title">
              #TITLE
            </th>
            <th scope="col" className="sku">
              #SKU
            </th>
            <th scope="col" className="price">
              #PRICE
            </th>
            <th scope="col" className="status">
              #STATUS
            </th>
            <th scope="col" className="status">
              
            </th>
            <th scope="col" className="date">
              #DATE
            </th>
            <th scope="col" className="notes">
              #NOTES
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row ">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWfri8yQYzHBlDd8vndcPwB_ZLwHqjsP7lWwV6tAM2mD-GrEgANeoq8__CbbbeAc9QikAZoYvt0p8&usqp=CAc"
                class="img-fluid"
                alt="Responsive image"
              />
            </th>
            <td>
              {" "}
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control{" "}
            </td>
            <td> 1T5</td>

            <td>
            <div>$3</div>
           <div>$5</div>
           <div>$3</div>
            </td>
            <td>
            <div>ebay</div>
           <div>poshmark</div>
           <div>mercari</div>
            </td>
            <td>
              <Link
              to="#"
              >
              <button className="btn btn-primary d-inline">List Product</button>
              </Link>
            
          
            </td>
            <td><h6>28 APR 2020</h6></td>
          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWfri8yQYzHBlDd8vndcPwB_ZLwHqjsP7lWwV6tAM2mD-GrEgANeoq8__CbbbeAc9QikAZoYvt0p8&usqp=CAc"
                className="img-fluid"
                alt="Responsive image"
              />
            </th>
            <td>
              {" "}
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control
            </td>
            <td>1T5</td>
            <td>
            <div>$3</div>
           <div>$5</div>
           <div>$3</div>
            </td>
            <td>
            <div>ebay</div>
           <div>poshmark</div>
           <div>mercari</div>
            </td>
            <td>
            <Link
              to="#"
              >
              <button className="btn btn-primary d-inline">List Product</button>
              </Link>
              </td>
            <td><h6>28 APR 2020</h6></td>

          </tr>
          <tr>
            <th scope="row">
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWfri8yQYzHBlDd8vndcPwB_ZLwHqjsP7lWwV6tAM2mD-GrEgANeoq8__CbbbeAc9QikAZoYvt0p8&usqp=CAc"
                class="img-fluid"
                alt="Responsive image"
              />
            </th>
            <td>
              {" "}
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control
            </td>
            <td>1T5</td>
            <td>
            <div>$3</div>
           <div>$5</div>
           <div>$3</div>
            </td>
            <td>
            <div>ebay</div>
           <div>poshmark</div>
           <div>mercari</div>
            </td>
            <td><button className="btn btn-primary d-inline">List Product</button></td>
            <td><h6>28 APR 2020</h6></td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default searchcart;
