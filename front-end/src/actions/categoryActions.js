export const GET_CATEGORIES_PENDING = `GET COMMENTS PENDING`;
export const GET_CATEGORIES_SUCCESS = `GET COMMENTS SUCCESS`;
export const GET_CATEGORIES_FAILURE = `GET COMMENTS FAILURE`;

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch({ type: GET_COMMENTS_PENDING })
    fetch('http://localhost:3000/api/v1/categories').then(response => {
      return response.json()})
      .then(responseJSON => {
        
        return dispatch({ type: GET_COMMENTS_SUCCESS, payload: responseJSON.data })
      })
      .catch(err => {
      dispatch({ type: GET_COMMENTS_FAILURE, err })
    })
  }
}