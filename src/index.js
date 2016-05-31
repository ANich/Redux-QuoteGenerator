import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import initialState from './state/initial'
import reducer from './reducers'
import App from './components/App'

let store = createStore(reducer, initialState, applyMiddleware(thunk, createLogger()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
