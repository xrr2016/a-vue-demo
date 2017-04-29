export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    payload: {
      postId,
      index
    }
  }
}