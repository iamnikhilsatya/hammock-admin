import React, { Component } from "react";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";
import "./Template.css";

export default class extends Component {
  constructor() {
    super();
    this.leftRef = React.createRef();
    this.rightRef = React.createRef();
  }

  render = () => {
    return (
      <div className="contanier-fluid template px-3 mt-5">
        <div className="row">
          <div className="col-md-6 pr-5">
            <LeftSection leftRef={this.leftRef} />
          </div>
          <div className="col-md-6 pl-5">
            <RightSection rightRef={this.rightRef} />
          </div>
        </div>
        <div className="mb-5 pb-5"></div>
      </div>
    );
  };
}
