import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      author: '',
      text: ''
    }
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleAuthorChange (event) {
    this.setState({ author: event.target.value })
  }

  handleTextChange (event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const { postId } = this.props.params
    const { author, text } = this.state
    if (author && text) {
      this.props.addComment(postId, author, text)
    }
    this.setState({
      author: '',
      text: ''
    })
  }

  render () {
    const { comments } = this.props
    return (
      <div className='comments'>
        {comments.map((comment, index) => <Comment {...comment} key={index} />)}
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
