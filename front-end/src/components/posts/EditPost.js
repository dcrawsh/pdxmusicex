import React, { Component } from 'react';
import { connect } from 'react-redux'
import { postPosts } from '../../actions/postActions'
import { patchPost } from '../../actions/postActions'

 
class EditPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      category_id: '',
      id: this.props.match.params.id
    };
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/posts/${this.props.match.params.id}`)
    .then(response => response.json()) 
    .then(responseJSON => {
      this.setState({title: responseJSON.data.attributes.title,
    description: responseJSON.data.attributes.description,
    category_id: responseJSON.data.attributes.category.id,
    })
    })
  } 

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.patchPost(this.state)
    this.setState({
      title: '',
      description: '',
      category: ''
    });
    alert('Post Edited')
    window.location.replace('/posts')
  }

  render() {
    
    const mapCategories = () => {
      return this.props.categories.categories.map(category => <option key={category.id} value={category.id}>{category.attributes.name}</option>)
    }
    
    
    return (
      <div className='container'>
        <h3>Edit Post</h3>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
        <div className="row">
        <div className="col-25">
          <label htmlFor="category">Choose a category:</label>
        </div>
            <select value={this.state.category_id} onChange={(event) => this.handleOnChange(event)} name="category_id" id="category">
               <option>--Please choose an option--</option>
                {mapCategories()}
            </select>
            </div>
            <br></br>
            <label htmlFor="formTitle">Title:</label>
          <input type="text" name="title"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)}/><br></br>
            <label htmlFor="formDescription">Description:</label>
          <textarea type="textarea" rows="10" cols="50" name="description"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit"></input>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {categories: state.categories,
posts: state.posts}
}

const mapDispatchToProps = (dispatch) => {
  return {postPosts: payload => dispatch(postPosts(payload)),
patchPost: payload => dispatch(patchPost(payload))}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)