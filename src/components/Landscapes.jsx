import React from 'react';
import nature1 from './../assets/images/nature1.jpg';
import nature2 from './../assets/images/nature2.jpg';
import nature3 from './../assets/images/nature3.jpg';

function Landscapes(){
  return(
    <div className="gallery-photo">
      <img className="portrait-format" src={nature1} alt="landscape" />
      <img src={nature2} alt="landscape" />
      <img src={nature3} alt="landscape" />
    </div>
  );
}
export default Landscapes;
