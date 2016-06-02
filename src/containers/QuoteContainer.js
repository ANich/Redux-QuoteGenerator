import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchQuote } from '../actions'
import { Quote, QuoteButton } from '../components'

class QuoteContainer extends Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.props.dispatch(fetchQuote())
  }

  render() {
    const { quote, network } = this.props
    return (
      <div>
        <Quote quote={quote} />
        <QuoteButton
          disabled = {network.fetching}
          onClick = {this.handleButtonClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { quote, network } = state
  return {
    quote,
    network
  }
}

export default connect(mapStateToProps)(QuoteContainer)
