import React, { PropTypes, Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import styles from './styles.module.css';

export default class QuoteButton extends Component {
  render() {
    return (
      <div className={styles.buttonContainer}>
        <FloatingActionButton
          onClick={this.props.onClick}
          disabled={this.props.disabled}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }
}

QuoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

QuoteButton.defaultProps = {
  disabled: false
}
