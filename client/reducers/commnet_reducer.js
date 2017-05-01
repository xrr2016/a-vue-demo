export default function comments(state = {}, action) {
  switch(action.type) {
    case "ADD_COMMENT":
      const comment = Object.assign({}, {author: action.author, text: action.text})
      const newState = Object.assign({}, {...state})
      newState[action.postId].push(comment)
      return newState
    default:
      return state
  }
}