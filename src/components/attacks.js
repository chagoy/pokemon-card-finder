import React from 'react';

export default function Attacks(props) {
	const html = props.attacks.map((attack, index) => <p key={index}>{attack.name} - <span className="text-muted">{attack.text}</span> </p>);

	return (
		<div>{html}</div>
	);
}