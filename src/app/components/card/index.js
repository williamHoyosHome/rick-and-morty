import React from 'react';

import './index.scss';

function Card({ image, name }) { 
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