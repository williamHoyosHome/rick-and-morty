import React from 'react';
import { Link } from 'react-router-dom'

// components
import Search from '../widgets/components/search';

function Nav() { 
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link to={`/`}>Home</Link>
					</li>
				</ul>
				<Search />
			</div>
		</nav>
	)
}

export default Nav;

