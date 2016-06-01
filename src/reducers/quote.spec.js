import expect from 'expect'

import quote from './quote'
import { REQUEST_QUOTE, RECEIVE_QUOTE } from '../actions'

describe('reducer', () => {
  describe('quote', () => {
    it('should appropriately handle a REQUEST_QUOTE action', () => {
      const action = { type: REQUEST_QUOTE }

      expect(quote({}, action)).toEqual({
          fetching: true
        })
      })

    it ('should appropriately handle a RECEIVE_QUOTE action', () => {
      const action = {
        type: RECEIVE_QUOTE,
        quote: "Test Quote"
      }

      expect(quote({}, action)).toEqual({
        fetching: false,
        quote: "Test Quote"
      })
    })
  })
})
