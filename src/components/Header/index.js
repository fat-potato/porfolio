import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>Furion</div>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;

