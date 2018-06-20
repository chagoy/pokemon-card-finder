import React from 'react';
import Slot from './slot';

export default function Deck(props) {
	const html = props.deck.map((card, index) => <Slot removeCard={(e) => props.removeCard(index)} pokemon={card} key={index} pokemonKey={index} />);
	
	return (
		<div>{html}</div>
	);
}