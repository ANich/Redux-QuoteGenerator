import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchQuote } from '../actions'
import { Quote, QuoteButton, QuoteList } from '../components'

class QuoteContainer extends Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.props.dispatch(fetchQuote())
  }

  render() {
    const { quotes, network } = this.props
    return (
      <div>
        <QuoteList quotes={quotes} />
        <QuoteButton
          disabled = {network.fetching}
          onClick = {this.handleButtonClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { quotes, network } = state
  return {
    quotes,
    network
  }
}

export default connect(mapStateToProps)(QuoteContainer)
