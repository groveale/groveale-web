import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar';
import Icon from 'react-icons-kit';
import { bars } from 'react-icons-kit/fa/bars';
import { close } from 'react-icons-kit/fa/close'
import logo from '../.././logo.svg';
import './NavBar.css';


class NavBar extends Component {
  render() {
    return (
      
      <div className="NavBar">

      <Link className="NavBar-item text-big-light" to="/">Groveale Digital</Link>

      <ResponsiveMenu 
        menuOpenButton={<div > <Icon icon={bars} /> </div>}
        menuCloseButton={<div> <Icon icon={close} /></div>}
        changeMenuOn="500px"
        largeMenuClassName=""
        smallMenuClassName=""
        menu={
          
        <div>
          
         <ul id="menu" class="NavBar-items">
            
            <li><Link className="NavBar-item text-big-light" to="/hello">Projects</Link></li>
            <li><Link className="NavBar-item text-big-light" to="/about">About</Link></li>
            <li><Link className="NavBar-item text-big-light" to="/about">Contact</Link></li>
          </ul>
          </div>
        }
      />
      </div>

    );
  }
}

export default NavBar;
