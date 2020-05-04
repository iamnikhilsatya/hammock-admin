import React from "react";
import "./listmin.css";
import "bootstrap/dist/css/bootstrap.css";
import AddImage from "./addimage";
import Addbutton from "./addButton";
import Formcontrolselect from './formcontrolselect'
import Addinput from './addInput'
import Header from "../../Components/header/header";
import imageResponse from "../../Components/images/hammock.png";

function List() {
  return (
    <div className="listIt">
      <div id="imageset">
      <img src={imageResponse} class="img-fluid" alt="Responsive image"/>
      </div>
       <Header/>
      <form action="" className="listIt">
        <h4>Create Or Edit a Listing</h4>
        <div class="input-group row mb-5">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">
              Upload Images
            </span>
          </div>

          <div className="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            ></input>
            <label className="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddImage />
          </div>
          <div className="col">
            <AddImage />
          </div>
          <div className="col">
            <AddImage />
          </div>
          <div className="col">
            <AddImage />
          </div>
        </div>
        <h6>Select Sold If Your Listing Have Been Sold:</h6>
        <div className="row ">
          <div className="col">
            <Addbutton name="SOLD" />
          </div>
          <div className="col">
            <Addbutton name="EBAY" />
          </div>
          <div className="col">
            <Addbutton name="ETSY" />
          </div>
          <div className="col">
            <Addbutton name="POSHMARK" />
          </div>
          <div className="col">
            <Addbutton name="TRADESY" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <Addbutton name="AMAZON" />
          </div>
          <div className="col">
            <Addbutton name="GRAILED" />
          </div>
          <div className="col">
            <Addbutton name="FACEBOOK" />
          </div>
          <div className="col">
            <Addbutton name="DEPOP" />
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-6">
            <Formcontrolselect/>
          </div>
        </div>
        <h6 className="d-inline">SUGGEST TITLE?</h6>
        <i className="fa fa-check d-inline" aria-hidden="true"></i>
        <div>
        <h6 className="d-inline">PRODUCT TITLE:</h6>
        <i className="fa fa-question-circle d-inline" aria-hidden="true"></i>
        </div>
       
        <div className="row">
          <div className="col-9">
            <textarea  className="form-control rounded-0"id="story" name="story" rows="1" cols="70"></textarea>
          </div>
          <div className="col-3" id="alignIt">
            <h5>SHOW ALL TITLES</h5>
          </div>
        </div>

        <h6>44 or 140 max charcters.</h6>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              name="brandmaker"
              id="brandmaker"
              className="form-control"
              placeholder=""
            ></input>
          </div>
         
          <div className="col" id="alignIt">
            <h6>BRAND MAKER</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              name="colorshade"
              id="colorshade"
              className="form-control"
              placeholder=""
            ></input>
          </div>

          <div className="col"id="alignIt">
            <h6>COLOR SHADE</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              name="materialoringredient"
              id="materialoringredien"
              className="form-control"
              placeholder=""
            ></input>
          </div>
          <div className="col" id="alignIt">
            <h6>MATERIAL OR INGREDIENT</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              name="sizeorfit"
              id="sizeorfit"
              className="form-control"
              placeholder=""
            ></input>
          </div>
          <div className="col" id="alignIt">
            <h6>SIZE OR FIT</h6>
          </div>
        </div>
        <h6>SHORT DESCRIPTION</h6>

        <textarea
          id="story"
          name="story"
          rows="5"
          cols="100"
          className="mb-5 form-control rounded-0"
        ></textarea>
        <div className="row">
          <div className="col-6">
           <Addinput name="line1" id="line1"/>
          </div>
          <div className="col" id="alignIt">
            <h6>LINE 1</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <Addinput name="line2" id="line2"/>
          </div>
          <div className="col" id="alignIt">
            <h6>LINE 2</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
          <Addinput name="line3" id="line3"/>
          </div>
          <div className="col"id="alignIt">
            <h6>LINE 3</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
          <Addinput name="line4" id="line4"/>
          </div>
          <div className="col"id="alignIt">
            <h6>LINE 4</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
          <Addinput name="line5" id="line5"/>
          </div>
          <div className="col"id="alignIt">
            <h6>LINE 5</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
          <Addinput name="styleorfeature" id="styleorfeature"/>
           
          </div>
          <div className="col"id="alignIt">
            <h6>STYLE OR FEATURE?</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
          <Addinput name="patternortexture" id="patternortexture"/>
           
          </div>
          <div className="col"id="alignIt">
            <h6>PATTERN OR TEXTUTE?</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Addinput name="seasonorweather" id="seasonorweather"/>
            
          </div>
          <div className="col"id="alignIt">
            <h6>SEASON OR WEATHER?</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
          <Addinput name="care" id="care"/>

            
          </div>
          <div className="col"id="alignIt">
            <h6>CARE?</h6>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
          <Addinput name="madein" id="madein"/>

          </div>
          <div className="col"id="alignIt">
            <h6>MADE IN?</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h6>NEW?</h6>
            <h6>PRE OWNED?</h6>
          </div>
          <div className="col-9">
            <textarea           className="form-control rounded-0"
 id="story" name="story" rows="5" cols="80"></textarea>
          </div>
        </div>

        <div className="mb-5 mt-5">
          <p>Measurements:</p>
        </div>

        <div className="row">
          <div className="col-2">
            <h6>WAIST:</h6>
          </div>
          <div>
            <div className="col-10">
             <Addinput id="rise" name="rise"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <h6>INSEAM:</h6>
          </div>
          <div>
            <div className="col-10">
           <Addinput name="inseam" id="inseam"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <h6>RISE:</h6>
          </div>
          <div>
            <div className="col-10">
             <Addinput id="rise" name="rise"/>
            </div>
          </div>
        </div>
        <h6>Enter More Measurements?</h6>
        <h6>Bottom Of Description?</h6>

        <textarea           className="form-control rounded-0"
 id="story" name="story" rows="5" cols="120"></textarea>
        <h6>KEYWORDS OR TAGS?</h6>

        <textarea           className="form-control rounded-0"
 id="story" name="story" rows="5" cols="120"></textarea>
        <div className="row">
          <div className="col">
            <h6>PRICE</h6>
          </div>
          <div className="col">
            <h6>MRP</h6>
          </div>
          <div className="col">
            <h6></h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <Addinput name="price" id="price"/>

          </div>
          <div className="col">
            
          <Addinput name="mrp" id="mrp"/>

          </div>
          <div className="col"></div>
        </div>

        <div className="row">
          <div className="col">
            <h6>SKU</h6>
          </div>
          <div className="col">
            <h6>UPC</h6>
          </div>
          <div className="col">
            <h6>QUANTITY?</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            
          <Addinput name="sku" id="sku"/>

          </div>
          <div className="col">
          <Addinput name="upc" id="upc"/>

          </div>
          <div className="col">
          
          <Addinput name="quantity" id="quantity"/>

          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6>SHIPPING WEIGHT LB/KG</h6>
          </div>
          <div className="col">
            <h6>SHIPPING WEIGHT OZ/G</h6>
          </div>
          <div className="col">
            <h6>SHIPPING ZIP OR CITY CODE</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
          
          <Addinput name="shippingweightlb/kg" id="shippingweightlb/kg"/>

          </div>
          <div className="col">
          
          <Addinput name="shippingweightoz/g" id="shippingweightoz/g"/>

          </div>
          <div className="col">
          
          <Addinput name="shippingzip" id="shippingzip"/>

          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6>SHIPPING PACKAGE LENGTH</h6>
          </div>
          <div className="col">
            <h6>SHIPPING PACKAGE WIDTH</h6>
          </div>
          <div className="col">
            <h6>SHIPPING PACKAGE HEIGHT</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            
          <Addinput name="shippingpackagelength" id="shippingpackagelength"/>

          </div>
          <div className="col">
          
          <Addinput name="shippingpackagewidth" id="shippingpackagewidth"/>

          </div>
          <div className="col">
            
          <Addinput name="shippingpackageheight" id="shippingpackageheight"/>

          </div>
        </div>

        <div className="row">
          <div className="col">
            <h6>COST OF GOODS </h6>
          </div>
          <div className="col">
            <h6>SHIPPING,FEES OR OTHER COSTS?</h6>
          </div>
          <div className="col">
            <h6>PROFIT</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            
          <Addinput name="costofgoods" id="costofgoods"/>

          </div>
          <div className="col">
          
          <Addinput name="shippingfees" id="shippingfees"/>

          </div>
          <div className="col">
          
          <Addinput name="profit" id="profit"/>

          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <select class="form-control">
              <option>CLICK TO VIEW OR EDIT ITEM NUMBERS</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <select class="form-control">
              <option>CUSTOMIZATIONS</option>
            </select>
          </div>
        </div>

        <h6>Select Notes( Will Not Be Displayed In Listing)</h6>

        <textarea            className="form-control rounded-0"
id="story" name="story" rows="5" cols="120"></textarea>

        <button type="button" class="btn btn-primary mt-5">
          UPDATE
        </button>
      </form>
    </div>
  );
}

export default List;
