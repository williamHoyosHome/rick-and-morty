import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// Style
import './character.scss';

// Components
import Nav from '../navigation/nav'
import Loader from '../loader/loader';
import Card from '../card/index';

// Query
const CHARACTER_QUERY = gql`
	query CharacterQuery($id: Int!){
		character(id: $id){
			id
			name
			status
			species
			type
			gender
			origin {
				name
			}
			location {
				name
			}
			image
			url
			created
		}
	}
`

export default class Character extends Component {
	render(){
		let { id } = this.props.match.params;
		id = parseInt(id);
		return(
			<React.Fragment>
				<Nav />
				<Query query={CHARACTER_QUERY} variables={{id}}>
					{({ loading, error, data}) => {
						if(loading) return <Loader />
						if(error) console.log(error);
						const { character } = data
						console.log(this.props.to)
						return(
							
							<div className="container">
								<div className="row">
									<div className="table_info">
										<div className="col-12 col-md-12 character_image">
											<Card character={character} />
										</div>
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
								</div>
							</div>
						)
					}}
				</Query>
			</React.Fragment>
		)
	}
}