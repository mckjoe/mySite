import React from 'react';
import ImageList from './ImageList';

function People(props){
  return(
    <div className="people-images-body">
      <div className="people">
        <p>Oliver and Jess</p>
        <div>
          <ImageList
            imageList={props.Images}/>
        </div>
      </div>
    </div>

  );
}

export default People;
