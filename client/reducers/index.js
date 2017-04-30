import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './post_reducer'
import comments from './commnet_reducer'

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
})

export default rootReducer
