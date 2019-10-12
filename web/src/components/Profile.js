import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Profile extends React.Component {

  state = {
    isLoading: null,
    posts: []
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    })

    axios
    .get('http://localhost:5000/post/two')
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
      <div className="card" style={{width: '297px'}}>
        <img src="https://res.cloudinary.com/dqpoj0kcn/image/upload/v1570527946/caleb.png" className="card-img" alt="caleb" />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="featured-post">
            <h5>Featured Posts:</h5>
            {
              isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error.message}</div>
              ) :
              posts.map(post => (
                <p><Link to="" key={post.id}>{post.title}</Link></p>
              ))
            }
          </div>
          <span className="fa fa-twitter-square" aria-hidden="true"></span>
          <span className="fa fa-facebook-square" aria-hidden="true"></span>
          <span className="fa fa-linkedin-square" aria-hidden="true"></span>
          <span className="fa fa-instagram" aria-hidden="true"></span>
        </div>
      </div>
    );
  }

}

export { Profile };
