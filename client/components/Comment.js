import React, { Component } from 'react'

class Comment extends Component {
  render () {
    const { user, text } = this.props
    return (
      <div className="comment">
        <p>
          <strong>{user}</strong>
          {text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }
}

export default Comment