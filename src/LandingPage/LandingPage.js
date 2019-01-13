import React, { Component } from 'react';
import '../App.css';
import './LandingPage.css';
import logo from '../images/gymRat_logo.svg';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="GymRat logo" />
      </div>
    );
  }
}

export default LandingPage;
