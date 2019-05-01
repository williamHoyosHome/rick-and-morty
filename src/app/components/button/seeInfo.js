import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Style
import './button.scss';

class SeeInfo extends Component{
	render(){
		return(
			<div className="col-12">{this.props.ids.length > 0 ? 
				<Link to={`/character/${this.props.ids}`} 
					className="btn btn-primary seeInfo">
					See Info
				</Link> : ''}
			</div>
		)
	}
}

export default SeeInfo;