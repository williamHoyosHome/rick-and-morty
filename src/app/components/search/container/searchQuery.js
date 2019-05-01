import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';

// Components
import Loader from '../../loader/loader';
import Characters from '../../characters/component/characters';
import { SEARCH_QUERY } from '../../../../datasources/querys';
import Button from '../../button/seeInfo';

class SearchContainer extends Component {
	state = {
		ids: [],
		checked: false
	}
	
	handleChecked = (e) => {
		this.setState ({
			checked: e.target.checked
		})
	}
	
	getIds = (e) => {
		let item = e.target.value
		let array = this.state.ids;
		let indexOf = array.indexOf(item);
		if( indexOf === -1){
			this.setState ({
				ids: [].concat(this.state.ids, e.target.value)
			})
		}else if(indexOf > -1){
			let index = array.indexOf(item);
			array.splice(index, 1);
		}
	}

	render(){
		let { name } = this.props
		return(
			<Query query={SEARCH_QUERY} variables={{name}}>
				{({ loading, error, data}) => {
					if(loading) return <Loader />
					if(error) console.log(error);
					console.log(data)
					const { search } = data;
					return(
						<Fragment>
							<Button ids={this.state.ids} />
							<ul className="row">
								{search.map(character => (
								<Characters character={character} key={character.id}
									onChange={this.handleChecked} 
									checked={this.props.checked}
									onClick={this.getIds}
								/>
								))}
							</ul>
						</Fragment>
					)
				}}
			</Query>
		)
	}
}

export default SearchContainer;