import React from 'react';
import mrRobotLogo from './mrRobot.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={mrRobotLogo} alt='Mr. Robot is an American drama thriller television series created by Sam Esmail'/>
          <h1>Welcome to Kodflix!</h1>
        <td>
          <tr>
            <li>Black Mirror</li>
            <li>Breaking Bad</li>
            <li>Deadh Note</li>
          </tr>
          <tr>
            <li>Game of Thrones</li>
            <li>The Walking Dead</li>
            <li>The Wire</li>
          </tr>
        </td>
    </div>
  );
}

export default App;
