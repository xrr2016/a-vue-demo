import React, { Component } from 'react'
import { Link } from 'react-router' 

class App extends Component {
  render () {
    return (
      <h1>
        <Link to='/'>Reduxstagram</Link>
      </h1>
    )
  }
}

export default App