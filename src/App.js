import React from 'react';
import mrRobotLogo from './mrRobot.jpeg';
import blackmirror from './images/blackMirror.jpeg';
import breakingBad from './images/breakingBad.jpeg';
import deathNote from './images/deathNote.jpeg';
import gameOfTrones from './images/fameOfThrones.jpeg';
import walkingDead from './images/walkingDead.jpeg';
import theWire from './images/theWire.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={mrRobotLogo} alt='Mr. Robot is an American drama thriller television series created by Sam Esmail'/>
          <br /> <br /> <br />
        <div className='container'>
          <div className='item'>
            <img src={blackmirror} alt='Black Mirror movie cover'/>
              <div className='overlay'>
                <h1>Black Mirror</h1>
              </div>
          </div>
          <div className='item'>
            <img src={breakingBad} alt='Breaking Bad movie cover'/></div>
              <div className='overlay'>
                <h1>Breaking Bad</h1>
              </div>
          <div className='item'>
            <img src={deathNote} alt='Deadh Note movie cover'/></div>
        </div>  
        <div className='container'>
          <div className='item'>
            <img src={gameOfTrones} alt='Game of Thrones movie cover'/></div>
              <div className='overlay'>
                <h1>Games of Trones</h1>
              </div>
          <div className='item'>
            <img src={walkingDead} alt='The Walking Dead movie cover'/></div>
              <div className='overlay'>
                <h1>Walking Dead</h1>
              </div>
          <div className='item'>
            <img src={theWire} alt='The Wire movie cover'/></div>
              <div className='overlay'>
                <h1>The Wire</h1>
              </div>
        </div>

    </div>
  );
}

export default App;
