import React, { Component } from "react";
import { Link } from "react-router-dom";

class Editdomain extends Component {
  render() {
    return (
      <div>
        <div className="skin-blue fixed-layout">
          <div className="page-wrapper">
            <div className="container mt-4">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 m-auto">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="text-center heading">
                        Edit The Logins to automate
                      </h5>
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Domain"
                        readOnly
                      />
                      <input
                        type="text"
                        className="form-control mt-3"
                        placeholder="Username"
                        name="username"
                      />
                      <input
                        type="text"
                        className="form-control mt-3"
                        name="password"
                        placeholder="Password"
                      />
                      <Link
                        to="/passwords"
                        className="btn btn-block btn-success mt-3"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editdomain;
