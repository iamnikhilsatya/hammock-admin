import React from 'react'
import'bootstrap/dist/css/bootstrap.css';
import imageResponse from "../../Components/images/imagebackgroud.jpg";


function Addimage(){
    return(
        <div>
              <img src={imageResponse} class="img-fluid" alt="Responsive image"/>
        </div>
    );
}
export default Addimage;