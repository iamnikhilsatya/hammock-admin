import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
import ButtonGroup from "./ButtonGroup";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      selectedWebsites: [],
      type: "",
      showMoreLines: false,
    };
  }

  toggleSelectedWebsite = (str) => {
    const { selectedWebsites } = this.state;
    const idx = selectedWebsites.findIndex((a) => a === str);
    if (idx > -1) selectedWebsites.splice(idx, 1);
    else selectedWebsites.push(str);
    this.setState({ selectedWebsites });
  };

  setType = (str) => {
    if (this.state.type === str) this.setState({ type: "" });
    else this.setState({ type: str });
  };

  render = () => {
    const { selectedWebsites, type, showMoreLines } = this.state;
    console.log(selectedWebsites);

    return (
      <div>
        <div className="h6 fw-600 text-uppercase">
          SELECT SOLD IF YOUR LISTING HAS BEEN SOLD
        </div>

        <div className="button-group">
          <div className="row">
            <div className="col-3">
              <button
                className={`w-100 btn btn-${
                  selectedWebsites.includes("SOLD")
                    ? "primary"
                    : "outline-primary"
                }`}
                onClick={() => this.toggleSelectedWebsite("SOLD")}
              >
                SOLD
              </button>
            </div>
            <div className="col-3">
              <button
                className={`w-100 btn btn-${
                  selectedWebsites.includes("EBAY")
                    ? "primary"
                    : "outline-primary"
                }`}
                onClick={() => this.toggleSelectedWebsite("EBAY")}
              >
                EBAY
              </button>
            </div>
            <div className="col-3">
              <button
                className={`w-100 btn btn-${
                  selectedWebsites.includes("POSHMARK")
                    ? "primary"
                    : "outline-primary"
                }`}
                onClick={() => this.toggleSelectedWebsite("POSHMARK")}
              >
                POSHMARK
              </button>
            </div>
            <div className="col-3">
              <button
                className={`btn btn-${
                  selectedWebsites.includes("MERCARI")
                    ? "primary"
                    : "outline-primary"
                } w-100`}
                onClick={() => this.toggleSelectedWebsite("MERCARI")}
              >
                MERCARI
              </button>
            </div>
          </div>
        </div>

        <Select selectOptions={["Product Title"]} />
        <div className="d-flex align-items-center justify-content-between">
          <ButtonGroup
            type="Unisex"
            selectedType={type}
            setType={this.setType}
          />
          <ButtonGroup type="Men" selectedType={type} setType={this.setType} />
          <ButtonGroup
            type="Women"
            selectedType={type}
            setType={this.setType}
          />
          <ButtonGroup
            type="Unisex Kids"
            selectedType={type}
            setType={this.setType}
          />
          <ButtonGroup
            type="Girls"
            selectedType={type}
            setType={this.setType}
          />
          <ButtonGroup type="Boys" selectedType={type} setType={this.setType} />
          <ButtonGroup
            type="Babies"
            selectedType={type}
            setType={this.setType}
          />
          <ButtonGroup
            type="Maternity"
            selectedType={type}
            setType={this.setType}
          />
        </div>

        <div className="form-group mt-3">
          <label className="h6 py-2 fw-500 text-uppercase">
            Short Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
          <small className="form-text text-muted" style={{ fontSize: "0.5em" }}>
            44/5000 max characters
          </small>
        </div>
        <div className="py-3">
          <Input label="Line 1" />
          <Input label="Line 2" />
          <Input label="Line 3" />
          <Input label="Line 4" />
          <Input label="Line 5" />
          {showMoreLines && (
            <div>
              <Input label="Line 6" />
              <Input label="Line 7" />
              <Input label="Line 8" />
            </div>
          )}
          <div className="">
            <div
              className="btn btn-link mb-3 pl-0"
              onClick={() => this.setState({ showMoreLines: !showMoreLines })}
            >
              {showMoreLines ? "Hide" : "Show more"}
            </div>
          </div>
          <Select
            selectOptions={[
              "Select Condition",
              "New with tags",
              "New without tags",
              "Used",
            ]}
            label="Condition"
          />
          <div className="form-group mt-3">
            <label className="h6 py-2 fw-500 text-uppercase">
              Keywords or tags
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <Select selectOptions={["Click to view or edit item number"]} />
          <Select selectOptions={["Customization"]} />
          <div className="form-group mt-3">
            <label className="h6 py-2 fw-500 text-uppercase">
              Enter Note (Will not be displayed in listing)
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label className="label mb-3">COST OF GOODS</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label className="label mb-3">SHIPPING/OTHER COSTS?</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label className="label mb-3">Profit</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
