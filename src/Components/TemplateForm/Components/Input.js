import React from "react";

export default (props) => (
  <div className="form-group mb-4 row">
    <div className="col-sm-8">
      <input className="form-control form-control-sm" {...props.input} />
    </div>
    <label
      htmlFor="colFormLabelSm"
      className="col-sm-4 col-form-label text-right col-form-label-sm"
    >
      {props.label}
    </label>
  </div>
);
