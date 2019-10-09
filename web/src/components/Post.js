import React from 'react';
import { Story } from './Story';
import '../css/Post.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function Post({ postData }){
  return(
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Link to=""><img src={postData.image} className="card-img" alt="cartoon" /></Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to={`/${postData.title}`}><h5 className="card-title">{postData.title}</h5></Link>
            <p className="card-text"><small className="text-muted">{postData.date}</small></p>
            <p className="card-text">{postData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Post };
