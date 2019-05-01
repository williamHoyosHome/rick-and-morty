import React, { Component } from 'react';

// Components
import Search from '../component/search';
import history from '../../../history';

class SearchContainer extends Component {
	state = {
		search: ''
	}

	handleonChange = (e) => {
		this.setState ({
			search: e.target.value
		})
	}

	handleonSubmit = (e) => {
		if(e.keyCode == 13){
			history.push(`/search/${this.state.search}`);
		}
	}

	render(){
		return(
			<Search onChange={this.handleonChange} 
				value={this.state.search} 
				onSubmit={this.handleonSubmit}
			/>
		)
	}
}

export default SearchContainer;