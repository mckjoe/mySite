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
import Error404 from './Error404';
import Footer from './Footer';
import nature2 from './../assets/images/nature2.jpg';
import nature3 from './../assets/images/nature3.jpg';
import city1 from './../assets/images/08.JPG';
import weddingkids2 from './../assets/images/weddingkids2.JPG';
import weddingkids5 from './../assets/images/weddingkids5.JPG';
import arts2 from './../assets/images/arts2.jpg';
import arts3 from './../assets/images/arts3.jpg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state= {
      landscapeImageList: [
        {
          image: nature2
        },
        {
          image: nature3
        }
      ],
      cityscapeImageList: [
        {
          image: city1
        },
        {
          image: city1
        }
      ],
      peopleImageList: [
        {
          image: weddingkids2
        },
        {
          image: weddingkids5
        }
      ],
      artFunImageList: [
        {
          image: arts2
        },
        {
          image: arts3
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/galleries' component={Galleries} />
          <Route path='/websites' component={Websites} />
          <Route path='/people' render={()=><People Images={this.state.peopleImageList} />} />
          <Route path='/landscapes' render={()=><Landscapes Images={this.state.landscapeImageList} />} />
          <Route path='/cityscapes' render={()=><Landscapes Images={this.state.cityscapeImageList} />} />
          <Route path='/artsfuns' render={()=><ArtFun Images={this.state.artFunImageList} />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
