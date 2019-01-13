import React, { Component } from 'react';
import './App.css';
import LandingPage from "./LandingPage/LandingPage.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            GymRat
        </header>
        <body>
            <LandingPage />
        </body>
      </div>
    );
  }
}

export default App;
