import React, { PropTypes, Component } from 'react'
import FlatButton from 'material-ui/FlatButton'

export default class QuoteButton extends Component {
  render() {
    return (
      <FlatButton
        label="Get Quote"
        primary={true}
        onClick={this.props.onClick}
        disabled={this.props.disabled}/>
    )
  }
}
