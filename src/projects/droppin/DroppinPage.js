import React, { Component } from 'react';

import logo from './images/logo.svg';
import forground from './images/foreground.svg';
import background from './images/background.svg';
import middleground from './images/middleground.svg';

import appstore from './images/appstore.svg';
import playstore from './images/playstore.svg';

import groveale from './images/groveale.svg';

import './Droppin.css';

class Droppin extends Component {
  
    hideCommingSoon() {
 
      var cs = document.getElementById("commingSoon")

      if (cs) {
        cs.style['display']  = 'none';
      }
    }

    showCommingSoon() {
      var cs = document.getElementById("commingSoon")

      if (cs) {
        cs.style['display'] = 'block';
      }
    }


    handleScroll() {
      // Tutorial: https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27

      
        var depth, i, layer, layers, len, movement, topDistance, translate3d;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll("[data-type='parallax']");
        for (i = 0, len = layers.length; i < len; i++) {
          layer = layers[i];
          depth = layer.getAttribute('data-depth');
          movement = -(topDistance * depth);
          translate3d = 'translate3d(0, ' + movement + 'px, 0)';
          layer.style['-webkit-transform'] = translate3d;
          layer.style['-moz-transform'] = translate3d;
          layer.style['-ms-transform'] = translate3d;
          layer.style['-o-transform'] = translate3d;
          layer.style.transform = translate3d;
        }
    
   
    }

    

    componentWillMount() { 
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      this.showCommingSoon();
    }

    componentDidMount() {
      this.hideCommingSoon();
    }

    render() {
      
      return (
        

        
        <div className="droppin">
          <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" />
        

              

            <div id='hero'>
            
             <div class='layer-bg layer' data-depth='0.30' data-type='parallax' style={{backgroundImage: `url(${background})`}}>
              <div class='droppin-header'>
                  <img src={logo} className="droppin-logo" alt="logo" />
                  <h1 className="droppin-title droppin-title-header">Droppin'</h1>
                  <h2 className="droppin-title">The Ultimate Fortnite App</h2>
                </div>

             </div>
             <div class='layer-1 layer' data-depth='0.50' data-type='parallax' style={{backgroundImage: `url(${middleground})`}}></div>
             <div class='layer-2 layer' data-depth='1.0' data-type='parallax' style={{backgroundImage: `url(${forground})`}}></div>
            
        
            </div>

            <div className="dropping-download">

             <a href="https://itunes.apple.com/gb/app/droppin/id1383700189?mt=8"><img src={appstore} className="store-icon" alt="app store" /></a>
             <a href="https://play.google.com/store/apps/details?id=com.groveale.fortnitedrop"><img src={playstore} className="store-icon" alt="play store" /></a>

            </div>

            <div className="dropping-description">
              <h2> Use our fortnite companion app to bring the fun back to battle royal! </h2>
              <p> Need a drop location, we got you. Want to find out what's new in Battle Royal, our scroller actually works! Are the servers up? Let's find out.</p>

              <p> We haven't got a huge amount of features to boast about just yet but we have the following in the pipeline: </p>

              <ul>
                <li>Interactive Map</li>
                <li>Item List/Stats</li>
                <li>Player Stats and Leader boards</li>
              </ul>

              <h2> Let us know you thoughts or get in  <a href="mailto:onlinesupport@grovealedigital.com">touch</a> if you have any issues</h2>
              
              
        

          </div>

          
        <div className="groveale-digital">
        <a href="/"><img src={groveale} className="groveale-digital-icon" alt="groveale digital" /></a>
        </div>

        </div>

        
      );
    }
  }
  
  export default Droppin;