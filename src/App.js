import React from 'react';
import Movie from './Movie';
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
			<img
				src={mrRobotLogo}
				alt={'Mr. Robot is an American drama thriller television series created by Sam Esmail'}
			/>
			<br /> <br /> <br />
			<div className="container">
				<Movie name="Black Mirror" logo={blackmirror} />
				<Movie name="Breaking Bad" logo={breakingBad} />
				<Movie name="Deadh Note" logo={deathNote} />
			</div>
			<div className="container">
				<Movie name="Game of Thrones" logo={gameOfTrones} />
				<Movie name="The Walking Dead" logo={walkingDead} />
				<Movie name="The Wire" logo={theWire} />
			</div>
		</div>
	);
}

export default App;
