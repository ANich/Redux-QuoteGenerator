import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchQuote } from '../actions'
import { Quote, QuoteButton, QuoteList } from '../components'

class QuoteContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { quotes, network, onButtonClick } = this.props
    return (
      <div>
        <QuoteList quotes={quotes} />
        <QuoteButton
          disabled = {network.fetching}
          onClick = {onButtonClick}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(fetchQuote())
   }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuoteContainer)
