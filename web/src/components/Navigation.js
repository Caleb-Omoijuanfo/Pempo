import React from 'react';
import '../css/Navigation.css';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Story } from './Story';
import { Footer } from './Footer';
import { AllPost } from './AllPost';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function Navigation(){

  return(
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">Pempo</NavLink>
          <div className="topnav" id="myTopnav">
            <NavLink className="menu" to="/home" activeClassName="selected">Home</NavLink>
            <NavLink className="menu" to="/about" activeClassName="selected">About</NavLink>
            <NavLink className="menu" to="/contact" activeClassName="selected">Contact</NavLink>
            <Link to="" className="icon">
              <i className="fa fa-bars" onClick={myFunction}></i>
            </Link>
          </div>
        </nav>

        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/posts/:id" component={Story} />
        <Route path="/posts/all-posts/:id" component={AllPost} />
      </div>

      <Footer />
    </Router>
  );
}

export { Navigation };
