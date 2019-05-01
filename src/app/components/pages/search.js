import React, { Component, Fragment } from 'react';

// components
import Nav from '../navigation/component/nav';
import Logo from '../logo/logo';
import SearchQuery from '../search/container/searchQuery';

class Search extends Component {
	render(){
		let { name } = this.props.match.params;
		return(
			<Fragment>
				<Nav />
				<Logo />
				<SearchQuery name={name}/>
			</Fragment>
		)
	}
}

export default Search;