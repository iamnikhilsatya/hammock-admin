import React, { Component } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      suggestTitles: true,
      showOtherTitles: false,
    };
  }

  render = () => {
    const { suggestTitles, showOtherTitles } = this.state;

    return (
      <div>
        <h6 className="fw-600 text-dark">Create or Edit Listing.</h6>
        <div className="mt-3" />

        {/* Bulk Image Upload */}
        <div className="input-group c-pointer ">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile02"
            />
            <label
              className="custom-file-label form-control-sm"
              htmlFor="inputGroupFile02"
              aria-describedby="inputGroupFileAddon02"
            >
              Choose file
            </label>
          </div>
        </div>

        {/* Images */}
        <div className="d-flex justify-content-around no-gutters">
          <div className="px-1">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/300x300.png"
              alt="alt-tezt"
            />
          </div>
          <div className="px-1">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/300x300.png"
              alt="alt-tezt"
            />
          </div>
          <div className="px-1">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/300x300.png"
              alt="alt-tezt"
            />
          </div>
          <div className="px-1">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/300x300.png"
              alt="alt-tezt"
            />
          </div>
          <div className="px-1">
            <img
              className="img-fluid"
              src="https://via.placeholder.com/300x300.png"
              alt="alt-tezt"
            />
          </div>
        </div>

        {/* Suggest Titles */}
        <div className="d-flex align-items-center py-3">
          <div className="h6 fw-600 text-uppercase mt-3">Suggest Titles?</div>
          {suggestTitles ? (
            <i
              className="fas fa-check-square c-pointer text-secondary ml-3 mt-2"
              onClick={() => this.setState({ suggestTitles: false })}
            ></i>
          ) : (
            <i
              className="far fa-square c-pointer text-secondary ml-3 mt-2"
              onClick={() => this.setState({ suggestTitles: true })}
            ></i>
          )}
        </div>

        {/* Product Titles */}
        <div className="d-flex align-items-center mb-1">
          <div className="h6 fw-500 text-uppercase mt-3">Product Title </div>
          <i className="fas fa-question-circle c-pointer text-secondary ml-2 mt-2"></i>
        </div>
        <div className="form-group row">
          <div className="col-sm-8">
            <input className="form-control form-control-sm" type="text" />
            <small
              className="form-text text-muted"
              style={{ fontSize: "0.5em" }}
            >
              44/140 max characters
            </small>
          </div>
          <label
            className="col-sm-4 text-right col-form-label col-form-label-sm"
            onClick={() => this.setState({ showOtherTitles: !showOtherTitles })}
          >
            <Link>{showOtherTitles ? "Hide" : "Show"} All Titles</Link>
          </label>
        </div>
        {showOtherTitles && (
          <div>
            <div className="form-group row">
              <div className="col-sm-8">
                <input className="form-control form-control-sm" type="text" />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-4 text-right col-form-label col-form-label-sm"
              >
                EBAY
              </label>
            </div>
            <div className="form-group row">
              <div className="col-sm-8">
                <input className="form-control form-control-sm" type="text" />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-4 text-right col-form-label col-form-label-sm"
              >
                POSHMARK
              </label>
            </div>
            <div className="form-group row">
              <div className="col-sm-8">
                <input className="form-control form-control-sm" type="text" />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-4 text-right col-form-label col-form-label-sm"
              >
                MERCARI
              </label>
            </div>
          </div>
        )}

        {/* Feilds */}
        <div className="py-3">
          <Input label="BRAND OR MARKER" />
          <Input label="COLOR SHADE" />
          <Input label="MATERIAL OR INGREDIENT" />
          <Input label="SIZE OR FIT" />
          <Input label="STYLE OR FEATURE ?" />
          <Input label="PATTERN OR TEXTURE ?" />
          <Input label="SEASON OR WEATHER ?" />
          <Input label="CARE ?" />
          <Input label="MADE IN ?" />
        </div>

        {/* Measurements */}
        <div className="measurements">
          <span className="border h6 p-2 pr-3 rounded border-dark">
            Measurements :-
          </span>
          <div className="form-group my-2 my-4 d-flex align-items-center">
            <label className=" mb-0 mr-3 label">Waist :-</label>
            <input className="form-control form-control-sm" type="number" />
          </div>
          <div className="form-group my-2 my-4 d-flex align-items-center">
            <label className=" mb-0 mr-3 label">Inseam :-</label>
            <input className="form-control form-control-sm" type="number" />
          </div>
          <div className="form-group my-2 my-4 d-flex align-items-center">
            <label className=" mb-0 mr-3 label">Rise :-</label>
            <input className="form-control form-control-sm" type="number" />
          </div>
        </div>

        <div className="h6 pt-3 fw-500 text-uppercase mt-3">
          Enter More Measurements?
        </div>
        <div className="form-group">
          <label className="h6 py-2 fw-500 text-uppercase">
            Bottom of Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        {/* Meta Data */}

        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">PRICE</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">MRP</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">SKU</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">UPC</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">Quantity?</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">Shipping weight lb/kg</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">Shipping weight oz/g</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">Shipping zip or city code</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">Shipping package length</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">Shipping package width</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="label mb-3">Shipping package height</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    );
  };
}
