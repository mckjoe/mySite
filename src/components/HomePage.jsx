import React from 'react';
import ImageSlider from './ImageSlider';
import ImageFade from './ImageFade';
import HomepageText from './HomepageText';

function HomePage() {

  return(
    <div className="homePage">
      <ImageSlider />
      <HomepageText />
    </div>
  );
}

export default HomePage;
