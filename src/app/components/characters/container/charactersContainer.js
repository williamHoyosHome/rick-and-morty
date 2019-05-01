import React, { Component } from 'react';
import { Query } from 'react-apollo';

// Components
import { CHARACTERS_QUERY } from '../../../../datasources/querys';
import Characters from '../component/characters';
import Loader from '../../loader/loader';
import SeeInfo from '../../button/seeInfo';
import MoreCharacter from '../../button/morecharacter';

class CharactersContainer extends Component {
	state = {
		ids: [],
		checked: false,
		page: 1
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

	handleMoreCharacters = () => {
		this.setState({
			page: this.state.page + 1
		})
	}

	render(){
		let { page } = this.state;
		return(
			<Query query={CHARACTERS_QUERY} variables={{page}}>
				{({ loading, error, data, fetchMore}) => {
					if(loading) return <Loader />
					if(error) console.log(error);
					const { characters } = data;
					return(
						<ul className="row">
							<SeeInfo ids={this.state.ids} />
							{characters[0].results.map(results => (
								<Characters character={results} key={results.id} 
									onChange={this.handleChecked} 
									checked={this.state.checked}
									onClick={this.getIds}
								/>
							))}
							<MoreCharacter onClick={this.handleMoreCharacters} />			
						</ul>
					)
				}}
			</Query>
		)
	}
}

export default CharactersContainer;