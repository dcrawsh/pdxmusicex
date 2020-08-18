import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  categories: categoriesReducer
})