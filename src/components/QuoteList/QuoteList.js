import React, { Component } from 'react'

import Quote from '../Quote'

export default class QuoteList extends Component {
  render() {
    return (
      <div className="quoteList">
        {this.props.quotes.map(quote => {
          return (<Quote quote={quote} />)
        })}
      </div>
    )
  }
}
