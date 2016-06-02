import { formatResponse } from './api'

describe('Quotes On Design API', () => {
  it('should return the correctly formatted response', () => {
    const SAMPLE_RESPONSE = [
      {
        "ID":2391,
        "title":"Samadara Ginige",
        "content":"<p>A good design solves a problem. A bad design creates many.<\/p>\n",
        "link":"http:\/\/quotesondesign.com\/samadara-ginige-4\/"
      }
    ]

    const expected = {
      author: 'Samadara Ginige',
      text: 'A good design solves a problem. A bad design creates many.',
      link: 'http://quotesondesign.com/samadara-ginige-4/'
    }

    expect(formatResponse(SAMPLE_RESPONSE)).to.deep.equal(expected)

  })
})

