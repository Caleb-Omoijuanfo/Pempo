import React from 'react';
import { Profile } from './Profile';

function About({data}){
  return(
    <div className="content">
      <div className="left-container">
        <Profile post={data}/>
      </div>
      
      <div className="right-container about">
      <div className="card mb-3 contact-card">
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">About me</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer .
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <h6 className="card-title">Something else</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer .
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer .
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <div className="">
                <a href="contact.html"><button type="submit" className="btn btn-primary">Get in touch</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export { About };
