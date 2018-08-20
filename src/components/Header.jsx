import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

function Header(){
return(
  <div>
    <div className="header">
      <h1 className="logo"><span className="tic">Joseph</span> McKinney</h1>
      <Card />
    </div>
    <div className="inline-nav">
      <Link to="/">Home</Link>
      <Link to="/galleries">Galleries</Link>
      <Link to="/websites">Websites</Link>
      <Link to="/aboutme">About Me</Link>
    </div>
  </div>

  );
}
export default Header;
