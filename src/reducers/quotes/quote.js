import { RECEIVE_QUOTE } from '../../actions'

export default function quote(state, action) {
  switch (action.type) {
    case RECEIVE_QUOTE:
      return Object.assign({}, state, {
        text: action.text,
        author: action.author,
        link: action.link
      })
    default:
      return state
  }
}
