export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    payload: {
      postId,
      author,
      comment
    }
  }
}