import React, { Component, Fragment } from 'react';

// Style
import './charactersInfo.scss';

// components
import Card from '../../card/index';

class CharactersInfo extends Component {
	render(){
		const { character } = this.props
		return(
			<Fragment>
				<li className="col-12 col-sm-6 col-md-3 col-lg-3" key={character.id}>
					<div className="table_info">
						<Card name={character.name} image={character.image} />		
						<div>
							<label className="type">Status:</label>
							<span className="description">{character.status}</span>
						</div>
						<div className="type">
							<label>Species:</label>
							<span>{character.species}</span>
						</div>
						<div>
							<label>gender:</label>
							<span>{character.gender}</span>
						</div>
						<div>
							<label>origin:</label>	
							<span>{character.origin.name}</span>
						</div>
						<div>
							<label>location:</label>
							<span>{character.location.name}</span>
						</div>
						<div>
							<label>created:</label>
							<span>{character.created}</span>
						</div>
					</div>
				</li>
			</Fragment>
		)
	}
}

export default CharactersInfo;