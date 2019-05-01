import React, { Component, Fragment } from 'react';

// components
import Nav from '../navigation/component/nav';
import Logo from '../logo/logo';
import CharactersInfoContainer from '../charactersInfo/container/charactersInfoContainer';
import CharacterInfoContainer from '../charactersInfo/container/characterInfoContainer';

class CharactersId extends Component {

	// view of one or more characters 
	renderCharacter(id){
		const array = id.split(',');
		let length = array.length;
		if(length == 1){
			return <CharacterInfoContainer id={id} />
		}else if(length > 1){
			return <CharactersInfoContainer id={id} />
		}
	}

	render(){
		let { id } = this.props.match.params;
		return(
			<Fragment>
				<Nav />
				<Logo />
				{this.renderCharacter(id)}
			</Fragment>
		)
	}
}

export default CharactersId;