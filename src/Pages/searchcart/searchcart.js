import React from "react";
import "./searchcartmin.css";
import { Link } from "react-router-dom";

import Header from "../../Components/header/header";
import imageresponse from "../../Components/images/hammock.png";

function searchcart() {
  return (
    <div className="cartIt">
      <div className="imageset">
        <img src={imageresponse} class="img-fluid" alt="Responsive image" />
      </div>
      <Header />
      <div className="row">
        <div className="col-6">
          <Link
            type="button"
            to="/form"
           
          >
            <button className="btn btn-primary">Add Item</button>

          </Link>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <input
            type="text"
            className="form-control w-75"
            placeholder="Search"
          />
        </div>
      </div>
      <table class="table">
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
              <tr>$3</tr>
              <tr>$5</tr>
              <tr>$3</tr>
            </td>
            <td>
              <tr><p className="d-inline mr-5">ebay</p>
                <p className="d-inline mr-2">Edit</p>
                <p className="d-inline mr-2">Duplicate</p>
                <p className="d-inline mr-2">Template</p>
                <p className="d-inline mr-2">Delete</p>



              </tr>
              <tr>poshmark</tr>
              <tr>mercari</tr>
            </td>
            <td>APR 5 2020</td>
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
              <tr>$3</tr>
              <tr>$5</tr>
              <tr>$3</tr>
            </td>
            <td>
            <tr><p className="d-inline mr-5">ebay</p>
                <p className="d-inline mr-2">Edit</p>
                <p className="d-inline mr-2">Duplicate</p>
                <p className="d-inline mr-2">Template</p>
                <p className="d-inline mr-2">Delete</p>



              </tr>
              <tr>poshmark</tr>
              <tr>mercari</tr>
            </td>
            <td>APR 5 2020</td>
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
              <tr>$3</tr>
              <tr>$5</tr>
              <tr>$3</tr>
            </td>
            <td>
            <tr><p className="d-inline mr-5">ebay</p>
                <p className="d-inline mr-2">Edit</p>
                <p className="d-inline mr-2">Duplicate</p>
                <p className="d-inline mr-2">Template</p>
                <p className="d-inline mr-2">Delete</p>



              </tr>
              <tr>poshmark</tr>
              <tr>mercari</tr>
            </td>
            <td>APR 5 2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default searchcart;
