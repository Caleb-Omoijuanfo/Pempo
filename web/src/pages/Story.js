import React from 'react';

import PostService from '../services/postService';
import { Profile } from './Profile';
import defaultImg from '../assets/img/default.jpg';
import Error from '../components/Error/error';


class Story extends React.Component{
  state = {
    post: {},
    isLoading: false,
    error: false
  }

  fetchPost = async () => {  
    const { id } = this.props.match.params;
    try {
      let post = await PostService.fetchPost(id);
      post = post.data.post      

      this.setState({
        post: {...post},
        isLoading: false
      })

    } catch (error) {            
        this.setState({
          error: true,
          isLoading: false
        });
    }
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    });
    setTimeout(this.fetchPost, 5000);    
  };

  renderStory = (post) => {
    return (
      <div className="card mb-3 post">
        <img src={defaultImg} className="card-img-top" alt="story" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text"><small className="text-muted">{post.dateCreated}</small></p>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
    )
  };

  render(){
    const { post, isLoading, error } = this.state;  
    return(
      <div className="content">
        <div className="left-container">
          <Profile post={this.props.data}/>
        </div>

        <div className="right-container">
          <div>
            {isLoading && "Loading..."}
          </div>
          <div>
            {!isLoading && this.renderStory(post)}
          </div>          
          <div>
            {error && !isLoading && (
              <Error />
            )}
          </div>          
        </div>
      </div>
    );
  }

}

export { Story };
