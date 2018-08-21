import React from 'react';
import arts1 from './../assets/images/arts1.jpg';
import arts2 from './../assets/images/arts2.jpg';
import arts3 from './../assets/images/arts3.jpg';

function ArtFun(){
  return(
    <div className="gallery-photo">
      <img className="portrait-format" src={arts1} alt="Artsy work." />
      <img className="portrait-format" src={arts2} alt="Artsy work." />
      <img className="portrait-format" src={arts3} alt="Artsy work." />
    </div>
  );
}
export default ArtFun;
