import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Description extends Component {

	constructor() {
		super();
		this.state = {
			welcomeMessage: 'Welcome to description page, under construction!'
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				welcomeMessage: 'The best is yet to come!'
			})
		}, 3000);
	}

	render() {
		return (
			<div>
				<h1>(this.state.welcomeMessage)</h1>
				<Link to="./">Back to home page</Link>
			</div>
		);
	}
}