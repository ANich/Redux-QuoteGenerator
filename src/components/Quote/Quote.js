import React, { PropTypes, Component } from 'react'
import { Card, CardText } from 'material-ui/Card'

export default class Quote extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { quote } = this.props
    return (
      <Card expanded={true}>
        <CardText>
          <h3 className="quote"><em>{quote.text}</em></h3>
        </CardText>
        <CardText>
          <span className="author">{quote.author}</span> - <a href={quote.link}>(<span className="link">{quote.link}</span>)</a>
        </CardText>
      </Card>
    )
  }
}

Quote.PropTypes = {
  quote: React.PropTypes.object
}
