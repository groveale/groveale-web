import React, { Component } from 'react';

import grovealeBG from './images/grovealeBG.svg';
import groveale from './images/groveale.svg';

import './CommingSoon.css';

class CommingSoon extends Component {
  render() {
    return (

      <div id="commingSoon">
        <div className="commingSoonParallax" style={{backgroundImage: `url(${grovealeBG})`}}>
          
          
        </div>

        <div className="commingSoonGD">
          <img src={groveale} className="groveale" alt="groveale" />  
        </div>

      </div>
    );
  }
}

export default CommingSoon;