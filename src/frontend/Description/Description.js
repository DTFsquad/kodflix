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
		if(this.state.gallery === undefined) { 
			return <Redirect to='/not-found' />;
		} else {
			return (
				<div className='Description'>
					<h1>{this.state.gallery.name}</h1>
					<div className='container' >
						<div className='text'>{this.state.gallery.details}</div>
						<img 
							className='image'
							src={this.state.gallery.logo}
							alt={this.state.gallery.name} />
					</div>
					<Link to="/">Back to home page</Link>
				</div>
			);
		}
		
	}
}