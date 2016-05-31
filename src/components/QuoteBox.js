import React, { PropTypes, Component } from 'react'
import { Card, CardText } from 'material-ui/Card'

export default class QuoteBox extends Component {
  render() {
    return (
      <Card expanded={true}>
        <CardText>{this.props.text}</CardText>
      </Card>
    )
  }
}

QuoteBox.PropTypes = {
  text: PropTypes.string.isRequired
}
