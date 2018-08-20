import React, { Component } from 'react';
import '../css/App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Galleries from './Galleries';
import Websites from './Websites';
import People from './People';
import Landscapes from './Landscapes';
import Cityscapes from './Cityscapes';
import ArtFun from './ArtFun';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/galleries' component={Galleries} />
          <Route path='/websites' component={Websites} />
          <Route path='/people' component={People} />
          <Route path='/landscapes' component={Landscapes} />
          <Route path='/cityscapes' component={Cityscapes} />
          <Route path='/artsfuns' component={ArtFun} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
