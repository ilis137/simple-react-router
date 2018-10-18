import React, { Component } from "react";

class Post extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    const id = this.props.match.params.post_id;
    this.setState({
      id: id
    });
  }

  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          exercitationem? Voluptatem tenetur doloremque id dignissimos voluptas
          repellat optio, iusto modi magni similique soluta nam rem ipsa ab, sed
          possimus. Cumque.
        </p>
      </div>
    );
  }
}

export default Post;
