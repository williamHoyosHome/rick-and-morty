import React from 'react';
import './index.scss';

function Card({ character: { name, image}}) { 
	return(
		<div className="card" style={{ 
			backgroundImage: `url(${image})`}}>
			<div className="card-text">
				{name}
			</div>
		</div>
	)
}

export default Card;