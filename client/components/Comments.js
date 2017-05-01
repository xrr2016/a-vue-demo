import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  render () {
    const { comments } = this.props 
    return (
      <div className="comments">
        {comments.map((comment, index) => <Comment {...comment} key={index} />)}
        <form className="comment-form" ref="commentForm">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}

export default Comments