import React from 'react';
import cloudyDay from './../assets/images/clouds1.JPG';
import trillium from './../assets/images/trillium.JPG';
import nature1 from './../assets/images/nature1.jpg';
import nature2 from './../assets/images/nature2.jpg';
import nature3 from './../assets/images/nature3.jpg';
import cannon from './../assets/images/cannon.JPG';
import wedding1 from './../assets/images/weddingkids3.JPG';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  cloudyDay,
  trillium,
  nature2,
  nature3,
  cannon,
  wedding1
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}

const SlideShow = () => {
  return (
    <div className="fader">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default SlideShow;
