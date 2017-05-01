import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Post extends Component {
  render () {
    const { posts, params, comments } = this.props
    const { postId } = this.props.params
    const index = posts.findIndex(post => post.code === params.postId)
    const post = posts[index]
    return (
      <div className="single-photo">
        <Photo index={index} {...post} {...this.props} />
        <Comments comments={comments[postId] || []} />
      </div>
    )
  }
}

export default Post