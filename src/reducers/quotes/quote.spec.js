import quote from './quote'
import quotes from './quotes'
import { REQUEST_QUOTE, RECEIVE_QUOTE } from '../../actions'

describe('Reducer:', () => {
  describe('quote', () => {
    it('should get a RECEIVE_QUOTE action and return a new quote', () => {
      const action = {
        type: RECEIVE_QUOTE,
        text: "Test Quote",
        author: "Test Author",
        link: "http://example.com"
      }

      expect(quote({}, action)).to.deep.equal({
        text: "Test Quote",
        author: "Test Author",
        link: "http://example.com"
      })
    })
  })

  describe('quotes', () => {
    it('should get a RECEIVE_QUOTE action and return an addition to the list of quotes', () => {
      const action = {
        type: RECEIVE_QUOTE,
        text: "Test Quote",
        author: "Test Author",
        link: "http://example.com"
      }

      expect(quotes([], action)).to.deep.equal([
        {
          text: "Test Quote",
          author: "Test Author",
          link: "http://example.com"
        }
      ])

      expect(quotes([
        {
          text: 'Existing quote',
          author: 'Existing author',
          link: 'http://existing.link'
        }
      ], action)).to.deep.equal([
        {
          text: 'Existing quote',
          author: 'Existing author',
          link: 'http://existing.link'
        },
        {
          text: "Test Quote",
          author: "Test Author",
          link: "http://example.com"
        }
      ])
    })
  })
})
