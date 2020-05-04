import React from 'react'
import'bootstrap/dist/css/bootstrap.css';

function Formcontrolselect(){
    return(
        <div>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>DEFAULT</option>
    <option value="1">0</option>
    <option value="2">1</option>
    <option value="3">2</option>
  </select>
        </div>
    );
}
export default Formcontrolselect;