import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postPosts } from '../../actions/postActions'

 class PostInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      category_id: ''
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
      description: '',
      category: ''
    });
    alert('Post Created')
    window.location.replace('/posts')
  }

  render() {
    
    const mapCategories = () => {
      return this.props.categories.categories.map(category => <option key={category.id} value={category.id}>{category.attributes.name}</option>)
    }
    
    
    return (
      <div>
        <h3>New Post</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <label htmlFor="category">Choose a category:</label>
            <select onChange={(event) => this.handleOnChange(event)} name="category_id" id="category">
               <option value="">--Please choose an option--</option>
                {mapCategories()}
            </select><br></br>
          <input
            type="text" name="title"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)}/><br></br>
          <textarea
            type="textarea" name="description"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {categories: state.categories}
}

const mapDispatchToProps = (dispatch) => {
  return {postPosts: payload => dispatch(postPosts(payload))}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostInput)
