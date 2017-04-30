import React, { Component } from 'react'
import Photo from '../components/Photo'

class PhotoGrid extends Component {
  render () {
    const { posts, likeIncrement, comments } = this.props
    return (
      <div className="photo-grid">
        {posts.map((post, index) =>
          <Photo key={post.id} {...post} index={index}
          likeIncrement={likeIncrement} comments={comments} />
        )}
      </div>
    )
  }
}

export default PhotoGrid