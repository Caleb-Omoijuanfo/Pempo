import React from 'react';
import { Profile } from './Profile';
import { Post } from './Post';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

class Home extends React.Component {
  state = {
    posts: [],
    isLoading: false,
    error: null
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    })

    axios
    .get('http://localhost:5000/post/n')
    .then(res => {
      const posts = res.data.data.map(
        obj => obj
      );
      this.setState({ posts });
    })
    .catch(error => {
      this.setState(() => {
        return {
          error: error.message
        }
      })
    })
    .finally(() =>{
      this.setState({isLoading: false})
    })

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
            isLoading ? (
              <div>Loading...</div>
            ) :  error ? (
              <div>{error}</div>
            ): (
            posts.map(post => (
              <Post postData={post} key={post.id}/>
            )))
          }

          <div className="button-container">
            <button type="button" className="btn btn-outline-secondary"><Link to="/posts/all-posts/data">See More</Link></button>
          </div>
        </div>
      </div>
    );
  }
}


export { Home };
