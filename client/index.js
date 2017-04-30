import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import css from './styles/style.styl'
import App from './container/App'
import store, { history } from './store/index'
import PhotoGrid from './container/PhotoGrid'
import Photo from './components/Photo'

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path='/photo/:photoId' component={Photo} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)