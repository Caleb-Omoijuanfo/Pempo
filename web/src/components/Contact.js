import React from 'react';
import { Profile } from './Profile';

function Contact(){
  return(
    <div className="content">
      <div className="left-container">
        <Profile />
      </div>

      <div className="right-container">
      <div className="card mb-3 contact-card">
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">Get in touch</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer .
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer .
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>

              <form>
                <div className="form-group">
                  <label for="exampleInputEmail">Name</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Email Address</label>
                  <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label for="">Message</label>
                  <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export { Contact };
