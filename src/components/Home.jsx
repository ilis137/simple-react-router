import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data.slice(0, 10) });
    });
  }

  render() {
    const PostList = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div className="posts card">
            <div className="card-content" key={post.id}>
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts Yet!</div>
    );
    return (
      <div className="container">
        <h4 className="center"> Home </h4>
        {PostList}
      </div>
    );
  }
}
export default Home;
