import React from 'react';
import Attacks from './attacks';

export default function Card(props) {
	return (
		<div className="col-sm">
			<div className="card" key={props.pokemon.id}>
				<img onClick={(e) => props.onClick(props.pokemon)} className="card-img-top" src={props.pokemon.imageUrl} alt={props.pokemon.name} />
				<div className="card-body">
					<h5 className="card-title">{props.pokemon.name} - {props.pokemon.set}, {props.pokemon.series}</h5>
					{props.pokemon.attacks && props.pokemon.attacks.length > 0 ? <Attacks attacks={props.pokemon.attacks} /> : null}
				</div>
			</div>
		</div>
	);
}