import React from "react";
import Image from './Image';
import nature2 from './../assets/images/nature2.jpg';
import nature3 from './../assets/images/nature3.jpg';



function ImageList(props){
  return (
    <div className="gallery-photo">
      {props.imageList.map((photo, index) =>
        <Image image={photo.image}
          key={index} />
      )}
    </div>
  );
}

export default ImageList;
