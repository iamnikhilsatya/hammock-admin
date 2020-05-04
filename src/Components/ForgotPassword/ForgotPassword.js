import React from "react";
import './ForgotPasswordmin.css'
import { Link } from "react-router-dom";


function ForgotPassword(){
    return(
        <div>
           
            <div className="my-login-page">
         
        <section className="h-100">
          <div className="container h-100">
        
            <div className="row justify-content-md-center h-100">
           
              <div className="card-wrapper">
                <div className="card fat custom-card-margin">
                  <div className="card-body">
                    <div className="text-center ">
                 
                      <h4 className="mt-4 mb-4 heading">Forgot Password</h4>
                      <label>
                         Email Id:
                      </label>
                    </div>

                    <div className="">
                      <form style={{ width: "300px", margin: "auto" }}>
                        <input type="hidden" />
                        <br />
                        <input
              type="text"
              name="forgotpassword"
              id="forgotpassword"
              className="form-control"
              placeholder=""
            ></input>
                        <Link
                          to="/login"
                          className="btn btn-block btn-primary btn-sm my-3 py-2"
                        >
                          Confirm
                        </Link>
                       
                      </form>
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
export default ForgotPassword;