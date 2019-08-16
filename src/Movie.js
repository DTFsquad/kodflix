import React from 'react';


export default function Movie(props) {
	return (
		<div className="item">
			<img src={props.logo} alt={`${props.name} movie cover`} />
			<div className="overlay">
				<h1>{props.name}!</h1>
			</div>
		</div>
	);
}