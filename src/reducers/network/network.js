import { REQUEST_QUOTE, RECEIVE_QUOTE } from '../../actions'

export default function network(state = {}, action) {
  switch(action.type) {
    case REQUEST_QUOTE:
      return Object.assign({}, state, {
        fetching: true
      })
    case RECEIVE_QUOTE:
      return Object.assign({}, state, {
        fetching: false
      })
    default:
      return state
  }
}
