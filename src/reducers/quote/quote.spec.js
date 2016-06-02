import quote from './quote'
import { REQUEST_QUOTE, RECEIVE_QUOTE } from '../../actions'

describe('Reducer:', () => {
  describe('quote', () => {
    it('should appropriately handle a REQUEST_QUOTE action', () => {
      const action = { type: REQUEST_QUOTE }

      expect(quote({}, action)).to.deep.equal({
        network: {
          fetching: true
        }
      })
    })

    it('should appropriately handle a RECEIVE_QUOTE action', () => {
      const action = {
        type: RECEIVE_QUOTE,
        text: "Test Quote",
        author: "Test Author",
        link: "http://example.com"
      }

      expect(quote({}, action)).to.deep.equal({
        network: {
          fetching: false
        },
        quote: {
          text: "Test Quote",
          author: "Test Author",
          link: "http://example.com"
        }
      })
    })
  })
})
