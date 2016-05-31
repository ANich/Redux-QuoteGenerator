import fetch from 'isomorphic-fetch'

import { getQuote } from '../api'

export const REQUEST_QUOTE = 'REQUEST_QUOTE'
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE'

function requestQuote() {
  return {
    type: REQUEST_QUOTE,
  }
}

function receiveQuote(quote) {
  return {
    type: RECEIVE_QUOTE,
    quote
  }
}

export function fetchQuote() {
  return (dispatch) => {
    dispatch(requestQuote())
    getQuote()
      .then((quote) => dispatch(receiveQuote(quote)))
  }

}
