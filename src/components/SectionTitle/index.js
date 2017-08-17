import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
class SectionTitle extends Component {
  render() {
    return (
      <div className={styles.title}>
        <span className={styles.number}>{this.props.number ? this.props.number : '01'}</span>
        <span className={styles.text}>{this.props.text ? this.props.text : 'Section title'}</span>
      </div>
    );
  }
}

SectionTitle.propTypes = {
  text: PropTypes.string,
  number: PropTypes.string,
};

export default SectionTitle;

