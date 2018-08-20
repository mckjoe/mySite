import React from 'react';
import cloudyDay from './../assets/images/clouds1.JPG';
import shake from './../assets/images/shake23.JPG';
import redcar from './../assets/images/redcar.JPG';
import img from './../assets/images/08.JPG';
import { Link } from 'react-router-dom';


function Galleries() {
  return(
    <div className="gallery-options">
      <Link to="/landscapes"><div className="gallery-thumbs">
        <img src={cloudyDay} />
        <p>Landscapes</p>
      </div></Link>
      <Link to="/cityscapes"><div className="gallery-thumbs">
        <img src={img} />
        <p>Cityscapes</p>
      </div></Link>
      <Link to="/artsfuns"><div className="gallery-thumbs">
        <img src={redcar} />
        <p>Arts/Funs</p>
      </div></Link>
      <Link to="/people"><div className="gallery-thumbs">
        <img src={shake} />
        <p>People/Weddings/Family</p>
      </div></Link>

    </div>
  );
}

export default Galleries;
