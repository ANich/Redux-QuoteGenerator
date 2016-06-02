import {
  REQUEST_QUOTE, RECEIVE_QUOTE
} from '../../actions'

function quote(state = {
  fetching: false,
  quote : 'Default Quote'
}, action) {
  switch (action.type) {
    case REQUEST_QUOTE:
      return Object.assign({}, state, {
        network: {
          fetching: true
        }
      })
    case RECEIVE_QUOTE:
      return Object.assign({}, state, {
        network: {
          fetching: false
        },
        quote: {
          text: action.text,
          author: action.author,
          link: action.link
        }
      })
    default:
      return state
  }
}

export default quote
