import { combineReducers } from 'redux'
import { routerReducers } from 'react-router-redux'
import { postReducer } from './post_reducer'
import { commentReducer } from './commnet_reducer'

const rootReducer = combineReducers({
  postReducer,
  commentReducer,
  routerReducers
})

export default rootReducer
