import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import logo from './logo.svg';
import HomePage from './pages/HomePage';
import Droppin from './projects/droppin/DroppinPage';
import Tappy from './projects/tappy/TappyPrivacy';
import CommingSoon from './components/commingsoon/CommingSoon';

import './variables/colours.css';
import './variables/text.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>

        <CommingSoon />

        {/* <Route path="/" exact={true} component={HomePage} /> */}

        <Route path="/projects/droppin" exact={true} component={Droppin} />
        <Route path="/projects/tappy" exact={true} component={Tappy} />

        {/* <Route path="/droppin" component={Droppin} />
        <Route path="/about" component={About} /> */}
      </div>
        
        

    </Router>
    );
  }
}

export default App;
