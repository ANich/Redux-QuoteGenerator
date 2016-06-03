import { combineReducers } from 'redux'

import network from './network'
import quotes from './quotes'

export default combineReducers({
  network,
  quotes
})

