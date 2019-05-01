import React, { Component } from 'react';

// Style
import './button.scss';

class MoreCharacter extends Component{
	render(){
		return(
			<div className="col-12">
				<button	className="btn btn-primary seeInfo" onClick={this.props.onClick}>
					More Characters
				</button>
			</div>
		)
	}
}

export default MoreCharacter;