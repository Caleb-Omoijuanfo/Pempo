import React from 'react';

import PostService from '../services/postService';
import { Profile } from './Profile';
import defaultImg from '../assets/img/default.jpg';


class Story extends React.Component{
  state = {
    post: {},
    isLoading: false,
    error: null
  }

  fetchPost = async () => {
    this.setState({ isLoading: false });

    const { id } = this.props.match.params;
    try {
      let post = await PostService.fetchPost(id);
      post = post.data.post
      console.log("Post: ", post);

      this.setState({
        post: {...post}
      })

    } catch (error) {
      //figure out what to do with the error.
        console.log(error);
    }
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    });
    this.fetchPost();
  };

  render(){
    const { post, isLoading, error } = this.state;
    console.log("postInRender: ", post);
    return(
      <div className="content">
        <div className="left-container">
          <Profile post={this.props.data}/>
        </div>

        <div className="right-container">
          <div className="card mb-3 post">
            <img src={defaultImg} className="card-img-top" alt="story" />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text"><small className="text-muted">{post.dateCreated}</small></p>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export { Story };
