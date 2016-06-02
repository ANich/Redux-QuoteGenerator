import React from 'react'
import { shallow } from 'enzyme'

import Quote from './Quote'

describe('Filled <Quote />', () => {
  let wrapper
  const quote = {
    text: 'Test Quote',
    author: 'Test Author',
    link: 'http://example.com'
  }
  beforeEach(() => {
    wrapper = shallow(<Quote quote={quote} />)
  })

  it('contains a quote with text', () => {
    expect(wrapper.find('.quote').text())
      .to.equal(quote.text)
  })

  it('contains an author', () => {
    expect(wrapper.find('.author').text())
      .to.equal(quote.author)
  })

  it('contains a link to the quote', () => {
    expect(wrapper.find('.link').text())
      .to.equal(quote.link)
  })
})
