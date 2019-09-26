import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../Gallery-get';
import './Description.css';

export default class Description extends Component {

	constructor() {
		super();
		this.state = {
			gallery: {}
		};
	}

	componentDidMount() {
		let galleryId = this.props.match.params.galleryId;
		let gallery = getGallery()
			.find((gallery) => gallery.id === galleryId);
		this.setState({ gallery });
	}

	render() {
		if (this.state.gallery === undefined) {
			return <Redirect to='/not-found' />;
		} else {
			return (
				<div className="description">
					<h1>{this.state.gallery.name}</h1>
					<div className="description-container">
						<h3 className="description-container-text">{this.state.gallery.details}</h3>
						<div className="description-container-image">
							<img
								src={this.state.gallery.logo}
								alt={this.state.gallery.name} />
						</div>
					</div>
					<br />
					<Link to="/">Back to home page</Link>
				</div >
			);
		}

	}
}