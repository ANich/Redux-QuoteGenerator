import expect from 'expect'

import { formatResponse } from './api'

describe('Quotes On Design API', () => {
  it('should return the raw text from the content field of the sample response', () => {
    const SAMPLE_RESPONSE = [
      {
        "ID":2391,
        "title":"Samadara Ginige",
        "content":"<p>A good design solves a problem. A bad design creates many.<\/p>\n",
        "link":"http:\/\/quotesondesign.com\/samadara-ginige-4\/"
      }
    ]
    const MATCH = /A good design solves a problem. A bad design creates many./

  expect(formatResponse(SAMPLE_RESPONSE)).toMatch(MATCH)
  })
})

