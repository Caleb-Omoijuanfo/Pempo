import React from 'react';
import { Profile } from './Profile';
import { Post } from './Post';
import {
  Link
} from "react-router-dom";
import PostService from '../services/postService';

class Home extends React.Component {
  state = {
    posts: [],
    isLoading: false,
    error: null,
    start: 0,
    length: 10
  }

  fetchPosts = async () => {
    this.setState({ isLoading: false });

    try {
      let posts = await PostService.fetchPosts(this.state.start, this.state.length);

      this.setState({ posts: [...posts.data.data]});

      console.log("Posts: ", posts);
      
    } catch (error) {
      //figure out what to do with the error. 
        console.log(error);
    }
  }


  componentDidMount(){
    this.setState({ isLoading: true });
    this.fetchPosts();
  }

  render(){
    const { posts, isLoading, error } = this.state;
    return(
      <div className="content">
        <div className="left-container">
          <Profile />
        </div>
        <div className="right-container">
          {
            isLoading ? <div>Loading...</div> : (
              posts.map(post => (
                <Post 
                  key={post.id}
                  postData={post}
                />
              ))
            )
          }          
        </div>
      </div>
    );
  }
}


export { Home };
