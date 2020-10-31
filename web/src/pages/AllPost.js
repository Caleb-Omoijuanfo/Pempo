import React from 'react';
import axios from 'axios';
import { Profile } from './Profile';
import { Post } from './Post';

class AllPost extends React.Component{
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
    .get('http://localhost:5000/post/all')
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
          <div className="card all-posts">
            <div className="card-body heading">
              <h1>All Posts</h1>
            </div>
          </div>

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
        </div>
      </div>
    );
  }

}


export { AllPost };
