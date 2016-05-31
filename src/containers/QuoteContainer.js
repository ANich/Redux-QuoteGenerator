import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchQuote } from '../actions'
import QuoteBox from '../components/QuoteBox'
import QuoteButton from '../components/QuoteButton'

class QuoteContainer extends Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    this.props.dispatch(fetchQuote())
  }

  render() {
    const { quote, fetching } = this.props
    return (
      <div>
        <QuoteBox text={quote} />
        <QuoteButton
          disabled = {fetching}
          onClick = {this.handleButtonClick}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { fetching, quote } = state
  return {
    fetching,
    quote
  }
}

export default connect(mapStateToProps)(QuoteContainer)
