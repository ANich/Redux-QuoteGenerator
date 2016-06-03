import { REQUEST_QUOTE, RECEIVE_QUOTE } from '../../actions'
import quote from './quote'

export default function quotes(state = [], action) {
  switch(action.type) {
    case REQUEST_QUOTE:
      return state
    case RECEIVE_QUOTE:
      return state.concat([
        quote({}, action)
      ])
    default:
      return state
  }
}
