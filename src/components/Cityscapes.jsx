import React from 'react';
import ImageList from './ImageList';

function Cityscapes(props){
  return(
    <div>
      <ImageList
        imageList={props.Images}/>
    </div>
  );
}
export default Cityscapes;
