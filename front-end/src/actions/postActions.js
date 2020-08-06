export const fetchPosts = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_POSTS'})
      fetch('http://localhost:3000/api/v1/posts').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_POSTS', posts: responseJSON.data })
      })
    }
  }