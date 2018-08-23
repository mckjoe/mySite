import React from 'react';
import nature1 from './../assets/images/nature1.jpg';
import nature2 from './../assets/images/nature2.jpg';
import nature3 from './../assets/images/nature3.jpg';
import ImageList from './ImageList';
import PropTypes from 'prop-types';

function Landscapes(props){
console.log(props.landscapeImages);
  return(
    <div>
      <ImageList imageList={props.Images}/>
    </div>
  );
}

Landscapes.propTypes = {
  landscapeImages: PropTypes.array
}

export default Landscapes;
