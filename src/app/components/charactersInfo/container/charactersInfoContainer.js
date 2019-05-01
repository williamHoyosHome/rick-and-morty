import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';

// Component y Querys
import { CHARACTERSID_QUERY } from '../../../../datasources/querys';
import CharactersInfo from '../component/charactersInfo';
import Loader from '../../loader/loader'

class CharactersContainer extends Component {
	render(){
		const { id } = this.props
		return(
			<Query query={CHARACTERSID_QUERY} variables={ { id }}>
				{({ loading, error, data}) => {
					if(loading) return <Loader />
					if(error) console.log(error);
					const { charactersId } = data;
					return(
						<Fragment>
							<ul className="row">
								{charactersId.map(characterId => (
									<CharactersInfo character={characterId} key={characterId.id} />
								))}
							</ul>
						</Fragment>
					)
				}}
			</Query>
		)
	}
}

export default CharactersContainer;