import React from 'react'
import { shallow } from 'enzyme'

import QuoteList from './QuoteList'

describe('<QuoteList />', () => {
  let wrapper
  const quotes = [
    {
      text: 'This is quote 1',
      author: 'QuoteOne Author',
      link: 'http://example.com'
    },
    {
      text: 'This is quote 2',
      author: 'QuoteTwo Author',
      link: 'http://example.com'
    }
  ]
  beforeEach(() => {
    wrapper = shallow(<QuoteList quotes={quotes} />)
  })

  it('should show a list of quotes when given', () => {
    expect(wrapper.find('Quote'))
      .to.have.length(quotes.length)
  })
})
