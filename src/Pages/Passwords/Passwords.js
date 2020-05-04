import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AddPassword.css";
import Header from "../../Components/header/header";
import hammock from "../../Components/images/hammock.png";
class Passwords extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <img src={hammock} class="img-fluid" alt="Responsive image" />
        </div>
        <Header />
        <div className="container">
          <div>
            <div>
              <h5 className="text-center mt-4 mb-4 heading">
                Log in Information
              </h5>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="card p-4 mb-4">
                  <h6 className="mb-3  sub-heading">
                    Please enter the information for the sites you want us to
                    automate for you
                  </h6>
                  <select className="form-control body-text" name="domain">
                    <option value="">Please select a site to list on</option>
                    <option value="">Ebay</option>
                    <option value="">Poshmark</option>
                    <option value="">Mercari</option>
                  </select>
                  <br />
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control mt-3 body-text"
                    name="username"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Password"
                    className="form-control mt-3"
                    name="password"
                  />
                  <br />
                  <div>
                    <button className="btn btn-danger mt-3">Add</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card  p-4 mb-4">
                  <h6 className="sub-heading">Ebay</h6>
                  <input
                    type="text"
                    placeholder="Ebay username"
                    className="form-control  mt-3"
                    name="ename"
                    value="ABC"
                    disabled
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Ebay Password"
                    className="form-control mt-3"
                    value="Password"
                    name="epass"
                    disabled
                  />
                  <br />
                  <div>
                    <Link to="/editpasswords">
                      <button className="btn btn-success body-text custom-edit-btn mt-3 btn-sm">
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "60px" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Passwords;
