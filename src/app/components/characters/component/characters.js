import React, { Component, Fragment } from 'react';

// Style
import './characters.scss';

// components
import Card from '../../card/index';

class Characters extends Component {
	render(){
		const { character } = this.props
		return(
			<Fragment>
				<li className="col-12 col-sm-6 col-md-4 col-lg-3">
					<Card name={character.name} image={character.image} />
					<div className="form-check">
						<input type="checkbox" className="form-check-input" 
							onChange={this.props.onChange}
							onClick={this.props.onClick}
							value={character.id}
						/>
					</div>
				</li>
			</Fragment>
		)
	}
}

export default Characters;