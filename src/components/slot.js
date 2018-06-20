import React from 'react';

export default function Slot(props) {
	return (
		<img 
			height="150px" 
			alt={props.pokemon.name} 
			src={props.pokemon.imageUrl} 
			onClick={() => props.removeCard(props.pokemonKey)}
		/>
	);
}