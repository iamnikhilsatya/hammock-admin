import React from "react";
import "./settingsmin.css";
import imageresponse from "../../Components/images/imagebackgroud.jpg";
import { Link } from "react-router-dom";

function settings() {
  return (
    <div className="settingsIt">
      <div className="row" id="profilephoto">
        <div className="col-5">
          <img src={imageresponse} class="img-fluid" alt="Responsive image" />
        </div>
        <div className="col-6">
          <div className="row">
            <i class="fa fa-user col-2 mt-2" aria-hidden="true"></i>
            <h4>John Doe</h4>
          </div>
          <div className="row">
            <i class="fa fa-envelope col-2" aria-hidden="true"></i>
            <h6>Johndoe@site.com</h6>
          </div>
          <div className="row">
            <i className="fa fa-globe col-2 pt-1"></i>
            <h6>www.johnsite.com</h6>
          </div>
          <div className="row">
            <div className="col-8">
              <i className="fa fa-cog iconpadding" aria-hidden="true"></i>
              <h6 className="inlineinname">preferences</h6>
            </div>

            <div className="col-4">
              <i className="fa fa-pencil d-inline mr-1"></i>
              <h6 className="d-inline">Edit</h6>
            </div>
          </div>
        </div>
      </div>
      <Link to="/transactions" className="row" id="settingsBackground">
        <div className="col-3">
          <i className="fa fa-user-circle fa-3x colorIt"id="backgroundIt"></i>
        </div>
        <div className="col-6">
          <h4 className="paddingfornames">Payment Details</h4>
        </div>
        <div className="col-3">
          <i
            class="fa fa-arrow-circle-right fa-3x t backgroundarrow"
            aria-hidden="true"
          ></i>
        </div>
      </Link>
      <Link to="/addpayment" className="row" id="settingsBackground">
        <div className="col-3">
          <i className="fa fa-calculator fa-3x colorIt"id="backgroundIt"></i>
        </div>
        <div className="col-6">
          <h4 className="paddingfornames">Change Payment</h4>
        </div>
        <div className="col-3">
          <i class="fa fa-arrow-circle-right fa-3x" aria-hidden="true"></i>
        </div>
      </Link>
      <Link to="/passwords" className="row" id="settingsBackground">
        <div className="col-3">
          <i
            class="fa fa-envelope-o  fa-3x colorIt" id="backgroundIt"
            aria-hidden="true"
          ></i>
        </div>
        <div className="col-6">
          <h4 className="paddingfornames">Logins</h4>
        </div>
        <div className="col-3">
          <i class="fa fa-arrow-circle-right fa-3x" aria-hidden="true"></i>
        </div>
      </Link>
      <Link to="/signin" className="row" id="settingsBackground">
        <div className="col-12">
          <h3 className="paddingfornames">LOGOUT</h3>
        </div>
      </Link>
    </div>
  );
}
export default settings;
