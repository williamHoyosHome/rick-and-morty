import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

// Style
import './characters.scss';

// components
import Card from '../card/index';
import Loader from '../loader/loader';


const CHARACTERS_QUERY = gql`
	query CharactersQuery {
		characters {
			id
			name
			image
		}
	}
`

export default class Characters extends Component {
	state = {
    ids: []
  }

  getIds(e){
		this.setState ({
			ids: [].concat(this.state.ids, e.target.value)
    })
		console.log(this.state.ids)
  }
	render(){
		return(
			<React.Fragment>
				<div className="col-12">
					<Link to={`/character/${this.state.ids}`} className="btn btn-primary">See info</Link>
				</div>
				<Query query={CHARACTERS_QUERY}>
					{({ loading, error, data}) => {
						if(loading) return <Loader />
						if(error) console.log(error);
						return(
							data.characters.map(character => (
								<li className="col-12 col-sm-6 col-md-3 col-lg-3" key={character.id}>
										<Card character={character} />								
									<div className="form-check">
								    <input type="checkbox" className="form-check-input" value={character.id} onClick={this.getIds.bind(this)} />
  								</div>
								</li>
							))
						)
					}}
				</Query>
			</React.Fragment>
		)
	}
}