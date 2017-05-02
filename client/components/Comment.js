import React, { Component } from 'react'

class Comment extends Component {
  render () {
    const { user, text, index, removeComment, postId } = this.props
    return (
      <div className="comment">
        <p>
          <strong>{user}</strong>
          {text}
          <button className="remove-comment" onClick={() => removeComment (postId, index)}>&times;</button>
        </p>
      </div>
    )
  }
}

export default Comment