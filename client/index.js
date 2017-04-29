import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import css from './styles/style.styl'
import App from './container/App'
import PhotoGrid from './container/PhotoGrid'
import Photo from './components/Photo'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={PhotoGrid} />
      <Route path='/photo/:photoId' component={Photo} />
    </Route>
  </Router>,
  document.getElementById('app')
)