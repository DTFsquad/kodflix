import React from 'react';
import mrRobotLogo from './mrRobot.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={mrRobotLogo} alt='Mr. Robot is an American drama thriller television series created by Sam Esmail'/>
          <br /> <br /> <br />
        <div className='container'>
          <div className='item'>Black Mirror</div>
          <div className='item'>Breaking Bad</div>
          <div className='item'>Deadh Note</div>
        </div>  
        <div className='container'>
          <div className='item'>Game of Thrones</div>
          <div className='item'>The Walking Dead</div>
          <div className='item'>The Wire</div>
        </div>

    </div>
  );
}

export default App;
