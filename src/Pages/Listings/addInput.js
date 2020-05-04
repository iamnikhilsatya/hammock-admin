import React from 'react'
import'bootstrap/dist/css/bootstrap.css';

function Addinput(props){
    return(
        <div>
           <input
              type="text"
              name={props.name}
              id={props.id}
              className="form-control"
              placeholder=""
            ></input>
        </div>
    );
}
export default Addinput;