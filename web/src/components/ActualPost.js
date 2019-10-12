import React from 'react';

function ActualPost({ postData }){
  return(
    <div className="card mb-3 post">
      <img src={postData.image} className="card-img-top" alt="story" />
      <div className="card-body">
        <h5 className="card-title">{postData.title}</h5>
        <p className="card-text"><small className="text-muted">{postData.date}</small></p>
        <p className="card-text">{postData.content}</p>
      </div>
    </div>
  );
}

export { ActualPost };
