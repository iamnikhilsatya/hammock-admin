import React from "react";
import { Link } from "react-router-dom";
import './headermin.css'

function header() {
  return (
    <div className="row navset pb-3">
      <div className="col">
      <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle"id="whitebackground" type="button" data-toggle="dropdown">Listing
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li>
    <Link
            type="button"
            to="/basic"
            className="btn dropdown-toggle colorIt border-0"
            id="dropdownMenuOffset"
          >
           Basic Listing
          </Link>
    </li>
    <li>
    <Link
            type="button"
            to="/form"
            className="btn dropdown-toggle colorIt border-0"
            id="dropdownMenuOffset"
          >
           Advanced Listing
          </Link>
    </li>
  </ul>
</div>
       
      </div>
      <div className="col">
        <Link
          to="/templates"
          type="button"
          className="btn dropdown-toggle colorIt border-0"
        >
          Templates
        </Link>
      </div>
      <div className="col mt-2">
        <Link to="/setting" className="border-0">
          Settings
        </Link>
      </div>
    </div>
  );
}
export default header;
