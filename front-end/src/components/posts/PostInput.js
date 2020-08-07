import React, { Component } from 'react';

 export default class PostInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  };

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.postPosts(this.state)
    this.setState({
      title: '',
      description: ''
    });
  }

  render() {
    return (
      <div>
        <h3>New Post</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text" name="title"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)} /><br></br>
          <textarea
            type="textarea" name="description"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};
