import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

// style
import './home.scss'

// components
import Nav from '../navigation/nav'
import logo from '../../public/image/logo.png';
import Card from '../card/index';
import Loader from '../loader/loader'

// Query
const SEARCH_QUERY = gql`
	query SearchQuery($name: String!) {
		search(name: $name) {
			id
			name
			image
		}
	}
`

class Search extends Component {
	render(){
		let { name } = this.props.match.params;

		return(
			<React.Fragment>
				<Nav />
				<figure>
					<img src={logo} className="logo" />
				</figure>
				<div className="container-fluid">
					<ul className="row">
						<Query query={SEARCH_QUERY} variables={{name}}>
							{({ loading, error, data}) => {
								if(loading) return <Loader />
								if(error) console.log(error);
								console.log(data)
								return(
									data.search.map(character => (
										<li className="col-12 col-sm-6 col-md-3 col-lg-3" key={character.id}>
											<Link to={`/character/${character.id}`}>
												<Card character={character} />								
											</Link>
										</li>
									))
								)
							}}
						</Query>
					</ul>
				</div>
		</React.Fragment>
		)
	}
}

export default Search;