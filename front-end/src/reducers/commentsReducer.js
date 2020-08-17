import { POST_COMMENT_PENDING, POST_COMMENT_SUCCESS, POST_COMMENT_FAILURE, GET_COMMENTS_PENDING, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE, DELETE_COMMENT_PENDING, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE } from "../actions/commentActions";


const initialCommentState = {
    loading: false,
    comments: [],
  }


export default function commentsReducer (state = initialCommentState, { type, payload }) {
    
    switch(type) {
      case POST_COMMENT_PENDING: {
        return {
          ...state,
        }
      }
      case POST_COMMENT_SUCCESS: {
        return {
          ...state,
          comments: [ ...state.comments, payload.data],
        }
      }
      case POST_COMMENT_FAILURE: {
        return {
          ...state,
        }
      }
      case DELETE_COMMENT_PENDING: {
        return {
          ...state,
          loading: true
        }
      }
      case DELETE_COMMENT_SUCCESS: {
        return {
          ...state,
          loading: false,
          comments: [...payload.data]
        }
      }
      case DELETE_COMMENT_FAILURE: {
        return {
          ...state,
          loading: false,
        }
      }
      default:
        return state;
    }
  }