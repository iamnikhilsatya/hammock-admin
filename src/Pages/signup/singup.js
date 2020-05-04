import React from "react";
import "./signupmin.css";
import Header from "../../Components/header/header";
import imageresponse from "../../Components/images/hammock.png";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div>
      <div className="text-center">
        <img src={imageresponse} class="img-fluid" alt="Responsive image" />
      </div>
      <div className="navset">
        <Header />
      </div>

      <form action="" className="formIt">
        <label for="firstname">FIRST NAME:</label>
        <input
          type="text"
          name="username"
          id="firstname"
          className="form-control mb-4"
        ></input>
        <label for="lastname">LAST NAME:</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="form-control mb-4"
        ></input>
        <label for="addressline1">ADDRESS LINE 1:</label>
        <input
          type="text"
          name="addressline1"
          id="addressline1"
          className="form-control mb-4"
        ></input>
        <label for="addressline2">ADDRESS LINE 2:</label>
        <input
          type="text"
          name="addressline2"
          id="addressline2"
          className="form-control mb-4"
        ></input>
        <label for="country">COUNTRY:</label>
        <input
          type="text"
          name="country"
          id="country"
          className="form-control mb-4"
        ></input>
        <label for="city">CITY</label>
        <input
          type="text"
          name="city"
          id="city"
          className="form-control mb-4"
        ></input>
        <label for="state">STATE/PROVINCE:</label>
        <input
          type="text"
          name="state"
          id="state"
          className="form-control  mb-4"
        ></input>
        <label for="postalcode">ZIP/POSTAL CODE:</label>
        <input
          type="text"
          name="postalcode"
          id="postalcode"
          className="form-control mb-4"
        ></input>
        <label for="email">EMAIL:</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control mb-4"
        ></input>
        <label for="password">PASSWORD:</label>
        <input
          type="text"
          name="password"
          id="password"
          className="form-control mb-4"
        ></input>
        <label for="passwordconfirmation">PASSWORD CONFIRMATION:</label>
        <input
          type="text"
          name="passwordconfirmation"
          id="passwordconfirmation"
          className="form-control mb-4"
        ></input>
        <label for="couponcode">COUPON CODE:</label>
        <input
          type="text"
          name="couponcode"
          id="couponcode"
          className="form-control mb-4"
        ></input>
        <div className="form-check">
          <input
            type="checkbox"
            id="accept-terms"
            className="form-check-input"
          ></input>
          <label for="accept-terms" className="form-check-label mb-4">
            I HAVE READ AND AGREE FOR TERMS SERVICE
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            id="accept-terms-1"
            className="form-check-input "
          ></input>
          <label for="accept-terms-1" className="form-check-label mb-4">
            I HAVE UNDERSTOOD MY ACCOUNT WILL CHARGED UPON THE SIGNUP AND THAT I
            HAVE 3 DAYS OR UPTO 20 CROSS POSTINGS TO CANCEL AND REQUEST A
            REFUND.{" "}
          </label>
        </div>
        <Link to="/addpayment" type="button" class="btn btn-primary">
          SIGNUP
        </Link>
      </form>
    </div>
  );
}

export default signup;
