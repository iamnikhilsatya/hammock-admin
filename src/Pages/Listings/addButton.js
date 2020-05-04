import React from 'react'
import'bootstrap/dist/css/bootstrap.css';

function Addbutton(props){
    return(
        <div>
            <button type="button" class="btn btn-secondary" id="buttonIt">{props.name}</button>
        </div>
    );
}
export default Addbutton;