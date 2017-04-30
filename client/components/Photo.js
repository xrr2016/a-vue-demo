import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends Component {
  render () {
    const { code, caption, index, display_src, likes, comments } = this.props
    return (
      <figure className="grid-figure">
        <div className="grid-photp-wrap">
          <Link to={`/post/${code}`}>
            <img className="grid-photo" src={display_src} alt={caption} />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span className="likes-heart" key={likes}>{likes}</span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{caption}</p>
          <div className="control-buttons">
            <button className="likes">&hearts; {likes}</button>
            <Link className="button" to={`/post/${code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>
                {comments[code] ? comments[code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
}

export default Photo