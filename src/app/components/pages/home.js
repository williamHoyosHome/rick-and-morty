import React, { Component, Fragment } from 'react';

// style
import './home.scss';

// components
import Nav from '../navigation/component/nav';
import Logo from '../logo/logo';
import CharactersContainer from '../characters/container/charactersContainer';

class Home extends Component {
	render(){
		return(
			<Fragment>
				<Nav />
				<Logo />
				<CharactersContainer />
			</Fragment>
		)
	}
}

export default Home;