import React from 'react';
import './search-form.css';

export default function searchForm(props) {
	return (
		<div className="row">
			<div className="col-md-10">
				<form 
					onSubmit={e => {
					e.preventDefault();
					props.onSubmit(e.target.value);
				}}>
					<div className="form-group">
						<label htmlFor="search">Search</label>
						<input
							onChange={(e) => props.onChange(e.target.value)}
							aria-controls="characater-count"
							type="search"
							id="search"
							name="search"
							placeholder="pikachu"
							className="form-control"
						/>
					</div>
			</form>
			</div>
		</div>
	);
}