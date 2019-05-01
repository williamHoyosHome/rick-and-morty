import React, { Component } from 'react';

// Style
import './search.scss';

class Search extends Component {
	render(){
		return(
			<div className="form-inline my-3 my-lg-0">
				<input className="form-control search" type="text" placeholder="Search you character favorite" 
					value={this.props.value}
					onChange={this.props.onChange}
					onKeyDown={this.props.onSubmit}
					props={this.props}
				/>
			</div>
		)
	}
}

export default Search;