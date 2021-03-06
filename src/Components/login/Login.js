import React, { Component } from "react";
import "./Login.css";
import hammock from "../images/hammock.PNG";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <div>
     
        <div class="my-login-page">
          <section class="h-100">
            <div class="container h-100">
              <div class="row justify-content-md-center h-100">
                <div class="card-wrapper">
                  <div class="card fat custom-card-margin">
                    <div class="card-body">
                   
                      <form className="mt-4">
                        <div class="form-group">
                          {/* <label for="number">Mobile no.</label> */}

                          <input
                          
                            id="number"
                            type="text"
                            class="form-control"
                            name="email"
                            placeholder="Email"
                            required
                            autofocus
                          />
                        </div>

                        <div class="form-group">
                          {/* <label for="password">Password</label> */}
                          <input
                            id="password"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="Password"
                            required
                          />
                        </div>

                        <div class="form-group no-margin">
                          <Link to="/searchcart" class="btn btn-info btn-block">
                            Login
                          </Link>
                        </div>
                      </form>
                      <br />
                      <div className="text-center">------ OR ------</div>
                      <br />

                      <div class="form-group no-margin">
                        <Link to="/forgotpassword" class="btn btn-secondary btn-block">
                          Forgot Password
                        </Link>
                      </div>
                     

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Login;
