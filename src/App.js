import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery.js';
import Description from './Description';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" Component={Gallery} />
					<Route path="/:description" Component={Description} />
					<Gallery />
				</div>
			</Router>
		);
	}
}


export default App;
