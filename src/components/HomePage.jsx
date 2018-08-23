import React from 'react';
import ImageSlider from './ImageSlider';
import ImageFade from './ImageFade';
import HomepageText from './HomepageText';
import SlideShow from './SlideShow';

function HomePage() {

  return(
    <div className="homePage">
      <SlideShow />
      <HomepageText />
    </div>
  );
}

export default HomePage;
