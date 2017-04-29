import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import reducer from '../reducers/index'
import comments from '../data/comments'
import posts from '../data/posts'

const initialState = {
  posts,
  comments
}

const store = createStore(reducer, initialState)

export const history = syncHistoryWithStore(browserHistory, store)
export default store









