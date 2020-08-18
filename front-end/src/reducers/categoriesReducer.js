import { GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE  } from "../actions/categoryActions";


const initialCommentState = {
  loading: false,
  comments: [],
}


export default function commentsReducer (state = initialCommentState, { type, payload }) {
    
    switch(type) {
    //   add GET_COMMENT
      
      case GET_CATEGORIES_PENDING: {
        return {
          ...state,
          loading: true
        }
      }
      case GET_CATEGORIES_SUCCESS: {
        return {
          ...state,
          loading: false,
          categories: [ ...payload],
        }
      }
      case GET_CATEGORIES_FAILURE: {
        return {
          ...state,
          loading: false
        }
      }