import React from 'react';
import weddingkids from './../assets/images/weddingkids.JPG';
import weddingkids2 from './../assets/images/weddingkids2.JPG';
import weddingkids3 from './../assets/images/weddingkids3.JPG';
import weddingkids4 from './../assets/images/weddingkids4.JPG';
import weddingkids5 from './../assets/images/weddingkids5.JPG';

function People(){
  return(
    <div className="people-images-body">
      <div className="people">
        <p>Oliver and Jess</p>
        <div className="gallery-photo">
          <img src={weddingkids} alt="Mooyman wedding." />
          <img src={weddingkids2} alt="Mooyman wedding." />
          <img src={weddingkids3} alt="Mooyman wedding." />
          <img src={weddingkids4} alt="Mooyman wedding." />
          <img src={weddingkids5} alt="Mooyman wedding." />
        </div>
      </div>
    </div>

  );
}

export default People;
