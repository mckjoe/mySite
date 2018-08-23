import React from 'react';
import ImageList from './ImageList';

function ArtFun(props){
  return(
    <div>
      <ImageList
        imageList={props.Images}/>
    </div>
  );
}
export default ArtFun;
