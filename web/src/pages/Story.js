import React from 'react';
import axios from 'axios';
import { Profile } from './Profile';
import { ActualPost } from './ActualPost';


class Story extends React.Component{
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
    .get('http://localhost:5000/post/title', {headers: { title: this.props.match.params.id}} )
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
      posts.map(post => (
        <div className="content">
          <div className="left-container">
            <Profile post={this.props.data}/>
          </div>

          <div className="right-container">
            {
              isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <ActualPost postData={post} key={post.id}/>
              )
            }
          </div>
        </div>
      ))
    );
  }

}

// {headers: { title: this.props.title}}

export { Story };
