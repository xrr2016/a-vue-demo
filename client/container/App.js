import { Link } from 'react-router'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

class App extends Component {
  render () {
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)