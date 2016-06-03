import network from './network'
import { REQUEST_QUOTE, RECEIVE_QUOTE } from '../../actions'


describe('Reducer:', () => {
  describe('network', () => {
    it('should be fetching when a REQUEST_ACTION is received', () => {
      const action = {
        type: REQUEST_QUOTE
      }

      expect(network({}, action))
        .to.deep.equal({
        fetching: true
      })
    })

    it('should stop fetching when a RECEIVE_QUOTE action is received', () => {
      const action = {
        type: RECEIVE_QUOTE,
        text: 'Some quote',
        author: 'Some author',
        link: 'Some link'
      }
      expect(network({}, action))
        .to.deep.equal({
          fetching: false
        })
    })
  })
})
