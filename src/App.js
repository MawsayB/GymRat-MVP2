import React, { Component } from 'react';
import './App.css';
import LandingPage from "./LandingPage/LandingPage.js"
import Header from "./Header/HeaderMenu.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <body>
            <LandingPage />
            <hr />
        </body>
      </div>
    );
  }
}

export default App;
