import React from 'react';
import axios from 'axios';

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
      console.log(posts);
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
        <div className="card mb-3 post">
          <img src={post.image} class="card-img-top" alt="story" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text"><small className="text-muted">{post.date}</small></p>
          </div>
        </div>
      ))
    );
  }

}

// {headers: { title: this.props.title}}

export { Story };
