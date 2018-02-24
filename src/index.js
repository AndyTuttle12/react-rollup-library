/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string,
    val: PropTypes.number
  }

  render() {
    const {
      text,
      val
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
        The rating for this lib: {val}
      </div>
    )
  }
}
