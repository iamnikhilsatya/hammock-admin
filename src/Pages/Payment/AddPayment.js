import React, { Component } from "react";
import "./addpayment.css";
import { CardElement } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import Header from "../../Components/header/header";
import hammock from "../../Components/images/hammock.png";
class AddPayment extends Component {
  render() {
    const { stripe } = this.props;
    return (
      <div className="my-login-page">
        <section className="h-100">
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat custom-card-margin">
                  <div className="card-body">
                    <div className="text-center ">
                      <h4 className="mt-4 mb-4 heading">Payment & Actions</h4>
                      <label>
                        Please add a credit card. We will charge you $49.97 for
                        your initial listing.
                      </label>
                    </div>

                    <div className="">
                      <form style={{ width: "300px", margin: "auto" }}>
                        <input type="hidden" />
                        <br />
                        <CardElement />
                        <Link
                          to="/search"
                          className="btn btn-block btn-primary btn-sm my-3 py-2"
                        >
                          Pay
                        </Link>
                        <div className="py-2">
                          <div className="sub-heading">
                            What we can automate for you
                          </div>
                          <p className="body-text mb-0 mt-2">
                            1. Listing on eBay
                          </p>
                          <p className="body-text mb-0 mt-2">
                            2. Crosslist on Mercari
                          </p>
                          <p className="body-text mb-0 mt-2">
                            3. Crosslist on Poshmark
                          </p>
                          <p className="body-text mb-0 mt-2">
                            4. Delist once item is sold
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AddPayment;
