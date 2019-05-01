import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';

// Component y Querys
import { CHARACTERID_QUERY } from '../../../../datasources/querys';
import CharactersInfo from '../component/charactersInfo';
import Loader from '../../loader/loader';

class CharacterContainer extends Component {
	render(){
		const { id } = this.props
		return(
			<Query query={CHARACTERID_QUERY} variables={{ id }}>
				{({ loading, error, data}) => {
					if(loading) return <Loader />
					if(error) console.log(error);
					const { characterId } = data;
					return(
						<Fragment>
							<ul className="row">
								<CharactersInfo character={characterId} key={characterId.id} />
							</ul>
						</Fragment>
					)
				}}
			</Query>
		)
	}
}

export default CharacterContainer;