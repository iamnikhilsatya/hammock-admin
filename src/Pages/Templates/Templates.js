import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "../../Components/header/header";
import hammock from "../../Components/images/hammock.png";
import imageresponse from "../../Components/images/hammock.png";
import "./Template.css";
import { Link } from "react-router-dom";

export default class extends Component {
  render = () => {
    return (
      <div>
        <div className="text-center py-3">
          <img src={imageresponse} class="img-fluid" alt="Responsive image" />
        </div>
        <div className="navset">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-2">
              <Link to="/form" className="card template-card bg-light">
                <div className="card-body d-flex align-items-center justify-content-center c-pointer text-center py-4">
                  <i className="fas fa-plus  fa-4x"></i>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <Link to="/form" className="card template-card bg-light">
                <div className="card-body d-flex align-items-center c-pointer text-center py-4 ">
                  <h5 className="card-text text-center p-3">
                    Existing Template
                  </h5>
                </div>
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <Link to="/form" className="card template-card bg-light">
                <div className="card-body d-flex align-items-center c-pointer text-center py-4 ">
                  <h5 className="card-text text-center p-3">
                    Existing Template
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
