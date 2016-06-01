import {
  REQUEST_QUOTE, RECEIVE_QUOTE
} from '../actions'

function quote(state = {
  fetching: false,
  quote : 'Default Quote'
}, action) {
  switch (action.type) {
    case REQUEST_QUOTE:
      return Object.assign({}, state, {
        fetching: true
      })
    case RECEIVE_QUOTE:
      return Object.assign({}, state, {
        fetching: false,
      quote: action.quote
      })
    default:
      return state
  }
}

export default quote
