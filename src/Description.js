import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getGallery from './Gallery-get';

export default class Description extends Component {

	constructor() {
		super();
		this.state = {
			gallery: {}
		}
	}

	componentDidMount() {
		let galleryId = this.props.match.params.galleryId;
		let gallery = getGallery()
			.find((gallery) => gallery.Id === galleryId);
		this.setState({
				gallery
			});
	}

	render() {
		return (
			<div>
				<h1>{this.state.gallery.name}</h1>
				<Link to="/">Back to home page</Link>
			</div>
		);
	}
}