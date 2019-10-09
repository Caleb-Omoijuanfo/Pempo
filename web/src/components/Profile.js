import React from 'react';
import { Link } from 'react-router-dom';

function Profile({ post }){
  return(
    <div className="card" style={{width: '297px'}}>
      <img src="https://res.cloudinary.com/dqpoj0kcn/image/upload/v1570527946/caleb.png" className="card-img" alt="caleb" />
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="featured-post">
          <h5>Featured Posts:</h5>
          <p><Link to="">{post}</Link></p>
          <p><Link to="">{post}</Link></p>
        </div>
        <span className="fa fa-twitter-square" aria-hidden="true"></span>
        <span className="fa fa-facebook-square" aria-hidden="true"></span>
        <span className="fa fa-linkedin-square" aria-hidden="true"></span>
        <span className="fa fa-instagram" aria-hidden="true"></span>
      </div>
    </div>
  );
}

export { Profile };
