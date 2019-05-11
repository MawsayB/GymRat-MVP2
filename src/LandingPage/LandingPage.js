import React, { Component } from 'react';
import '../App.css';
import './LandingPage.css';
import logo from '../images/gymRat_logo.svg';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <img className="logo" src="https://dl.dropboxusercontent.com/s/n3teipddkqww04i/Blue%20Version.png?dl=0raw=1" alt="GymRat logo" /><br />
        <hr />
            Stop using paper to track your workouts.
        <hr />

      </div>
    );
  }
}

export default LandingPage;
