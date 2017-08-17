import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
class Indicator extends Component {
  renderItem() {
    const list = [];
    for (let i = 0; i < this.props.total; i += 1) {
      list.push(<li className={this.props.current === i ? 'active' : ''}>{i}</li>);
    }
    return list;
  }
  render() {
    return (
      <ul className={styles.indicator}>
        { this.renderItem() }
      </ul>
    );
  }
}

Indicator.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
};

export default Indicator;

