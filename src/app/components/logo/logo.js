import React, { Component, Fragment } from 'react';

// style
import './logo.scss'

// import image
import logo from '../../public/image/logo.png';

class Home extends Component {
	render(){
		return(
			<Fragment>
				<figure>
					<img src={logo} className="logo" />
				</figure>
		</Fragment>
		)
	}
}

export default Home;