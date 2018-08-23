import React from 'react';
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
