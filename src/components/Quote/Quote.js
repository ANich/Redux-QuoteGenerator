import React, { PropTypes, Component } from 'react'
import { Card, CardText } from 'material-ui/Card'

import styles from './styles.module.css'

export default class Quote extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { quote } = this.props
    return (
      <div className={styles.quoteContainer}>
        <Card expanded={true}>
          <CardText>
            <h3 className="quote"><em>{quote.text}</em></h3>
          </CardText>
          <CardText>
            <span className="author">{quote.author}</span> - <a href={quote.link}>(<span className="link">{quote.link}</span>)</a>
          </CardText>
        </Card>
      </div>
    )
  }
}

Quote.PropTypes = {
  quote: React.PropTypes.object
}
