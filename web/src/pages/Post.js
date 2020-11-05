import React from 'react';

import '../css/Post.css';
import defaultImg from '../assets/img/default.jpg';
import moment from "moment";
import {
  Link
} from "react-router-dom";

function Post({ postData }){

  const headline = (content) => {
    content = content.replace(/(([^\s]+\s\s*){40})(.*)/,"$1…");
    return content;
  };

  return(
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Link to=""><img src={ postData.featuredImage == null ? defaultImg : postData.featuredImage } className="card-img" alt="featured" /></Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to={`/posts/${postData.id}`}><h5 className="card-title">{postData.title}</h5></Link>
            <p className="card-text"><small className="text-muted">{moment(postData.date).fromNow()}</small></p>
            <p className="card-text">{headline(postData.content)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export { Post };
