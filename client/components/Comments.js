import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      comment: ''
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange (event) {
    this.setState({ author: event.target.value })
  }

  handleTextChange (event) {
    this.setState({ comment: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { postId } = this.props.params
    const { author, comment } = this.state
    if (author.length > 0 && comment.length > 0) {
      this.props.addComment(postId, author, comment)
    }
    this.setState({
      author: '',
      text: ''
    })
  }

  render () {
    const { comments, removeComment } = this.props
    const { postId } = this.props.params
    return (
      <div className='comments'>
        {comments.map((comment, index) => (
          <Comment
            index={index}
            postId={postId}
            {...comment}
            key={index}
            removeComment={removeComment}
          />
        ))}
        <form
          className='comment-form'
          onSubmit={this.handleSubmit}
          ref='commentForm'
        >
          <input
            type='text'
            value={this.state.author}
            onChange={this.handleAuthorChange}
            placeholder='author'
          />

          <input
            type='text'
            value={this.state.text}
            onChange={this.handleTextChange}
            placeholder='comment'
          />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
