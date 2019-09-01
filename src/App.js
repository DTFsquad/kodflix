import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery.js';
import Description from './Description';
import NotFound from './notFound';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={ Gallery } />
						<Route path="/:descriptionId" component={ Description } />
						<Route exact path='/not-found' component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}


export default App;
