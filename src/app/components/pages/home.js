import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from 'react-apollo';

// style
import './home.scss'

// components
import Nav from '../navigation/nav'
import logo from '../../public/image/logo.png';

import Characters from '../characters/characters';

const CHARACTERS_QUERY = gql`
	query CharactersQuery {
		characters {
			id
			name
			image
		}
	}
`

class Home extends Component {
	render(){
		return(
			<React.Fragment>
				<Nav />
				<figure>
					<img src={logo} className="logo" />
				</figure>
				<div className="container-fluid">
					<ul className="row">
						<Characters />
					</ul>
				</div>
		</React.Fragment>
		)
	}
}

export default Home;