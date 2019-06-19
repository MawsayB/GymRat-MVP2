import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
        <br />
            <form>
              <label>Cardio: </label><br />
              <select 
                name="cardio"
                className="cardio"
                size="9"
                multiple>
                <option value="lunges">Alternating Lunges</option>
                <option value="bench-squats">Bench Squats</option>
                <option value="bridge">Bridge</option>
                <option value="jumping-jacks">Jumping Jacks</option>
                <option value="pop-squats">Pop Squats</option>
                <option value="pulse-squats">Pulse Squats</option>
                <option value="push-ups">Push Ups</option>
                <option value="step-ups">Step Ups</option>
                <option value="toe-taps">Toe Taps</option>
              </select>
              <br />

              <label>Exercise 1:  
                <input type="text" name="name" />
              </label>
              <br />

              <label>Exercise 2:  
                <input type="text" name="name" />
              </label>
              <br />

              <label>Exercise 3:  
                <input type="text" name="name" />
              </label>
              <br />

              <label>Exercise 4:  
                <input type="text" name="name" />
              </label>
              <br />

              <label>Exercise 5:  
                <input type="text" name="name" />
              </label>
              <br />

              <label>Exercise 6:  
                <input type="text" name="name" />
              </label>
              <br />

              <input type="submit" value="Submit" />

            </form>
        </body>
      </div>
    );
  }
}

export default App;
