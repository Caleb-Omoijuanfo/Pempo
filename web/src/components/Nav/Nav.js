import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
	myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
	}
	
	render () {
		return (
			<nav className="navbar navbar-light bg-light">
				<NavLink className="navbar-brand" to="/">Pempo</NavLink>
				<div className="topnav" id="myTopnav">
					<NavLink className="menu" to="/home" activeClassName="selected">Home</NavLink>
					<NavLink className="menu" to="/about" activeClassName="selected">About</NavLink>
					<NavLink className="menu" to="/contact" activeClassName="selected">Contact</NavLink>
					<Link to="" className="icon">
						<i className="fa fa-bars" onClick={this.myFunction}></i>
					</Link>
				</div>
    	</nav>
		);		
	};
};

export default Nav;