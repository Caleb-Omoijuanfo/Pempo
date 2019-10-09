import React from 'react';
import { Profile } from './Profile';
import { Post } from './Post';
import axios from 'axios';
import '../css/Home.css';

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
          <Profile post={this.props.data}/>
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
        </div>
      </div>
    );
  }
}


// const dummyData = [
//   {
//     image: 'https://res.cloudinary.com/dqpoj0kcn/image/upload/v1570527946/caleb.png',
//     title: 'The untold story of the one true angry bird',
//     time: 'APRIL 22, 2019',
//     text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
//   },
//
//   {
//     image: 'https://res.cloudinary.com/dqpoj0kcn/image/upload/v1570527946/caleb.png',
//     title: 'The untold story of the one true angry bird',
//     time: 'APRIL 22, 2019',
//     text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
//   },
//
//   {
//     image: 'https://res.cloudinary.com/dqpoj0kcn/image/upload/v1570527946/caleb.png',
//     title: 'The untold story of the one true angry bird',
//     time: 'APRIL 22, 2019',
//     text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
//   },
//
//   {
//     image: 'https://res.cloudinary.com/dqpoj0kcn/image/upload/v1570527946/caleb.png',
//     title: 'The untold story of the one true angry bird',
//     time: 'APRIL 22, 2019',
//     text: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
//   }
// ]


export { Home };
