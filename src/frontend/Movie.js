import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Movie(props) {
	return (
		<Link to={`/${props.id}`} className="item-cover">
			<img src={props.logo} alt={`${props.name} movie cover`} />
			<div className="item-cover-overlay">
				<h1>{props.name}!</h1>
			</div>
		</Link>
	);
}