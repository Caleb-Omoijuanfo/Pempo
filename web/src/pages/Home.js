import React from 'react';

import { Profile } from './Profile';
import { Post } from './Post';
import PostService from '../services/postService';
import PostCardSKeleton from '../components/SkeletonUI/postCardSkeleton';
import Error from '../components/Error/error';

class Home extends React.Component {
  state = {
    posts: [],
    isLoading: false,
    error: false,
    start: 0,
    length: 5
  }

  fetchPosts = async () => {    
    try {
      let posts = await PostService.fetchPosts(this.state.start, this.state.length);

      this.setState({ posts: [...posts.data.data]});   
      this.setState({ isLoading: false });

    } catch (e) {              
      this.setState({
        error: true,
        isLoading: false
      });
    }
  };

  componentDidMount(){
    this.setState({ isLoading: true });
    setTimeout(this.fetchPosts, 5000);    
  };

  renderSkeleton () {
    return (
      <PostCardSKeleton />    
    );    
  };

  render(){
    const { posts, isLoading, error } = this.state;

    let skeletonArray = new Array(3);
    skeletonArray.fill(0, 0);
    return(
      <div className="content">
        <div className="left-container">
          <Profile />
        </div>
        <div className="right-container">
          <div>
            {           
              isLoading ? (
                skeletonArray.map(skeleton => (
                  this.renderSkeleton()
                ))) : (
                posts.map(post => (
                  <Post 
                    key={post.id}
                    postData={post}
                  />
                ))
              )
            }
          </div>
          
          <div>
            {
              error && (
                <Error />
              )
            }
          </div>                             
        </div>
      </div>
    );
  }
}


export { Home };
