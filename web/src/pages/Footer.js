import React from 'react';
import {
  Link,
  NavLink
} from "react-router-dom";

function Footer(){
  return(
    <div>
      <footer>
        <div className="col1">
          <ul>
            <li>
              <Link to="/" className="navbar-brand">Pempo</Link>
            </li>
          </ul>
        </div>

        <div className="col2">
          <ul>
            <li className="navbar-brand">Quick Links</li>
            <li><NavLink to="/home" activeClassName="selected">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
          </ul>
        </div>

        <div className="col3">
          <ul>
            <li className="navbar-brand">Contact Us</li>
            <li>
              <span className="fa fa-phone"></span> 0810-212-7406
            </li>
            <li>
              <span className="fa fa-envelope"></span> c.omoijuanfo@gmail.com
            </li>
          </ul>
        </div>

      </footer>
      <div className="footer-extension">
        <div className="footer-extension-item">
          <p>© 2019 Pempo. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
