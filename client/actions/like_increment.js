export function likeIncrement(index) {
  return {
    type: 'INCREMENT_LIKES',
    payload: index
  }
}