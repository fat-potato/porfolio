import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import Header from 'components/Header';
import Indicator from 'components/Indicator';

class Intro extends Component {
  render() {
    return (
      <div>
        <Header />
        <Indicator />
        <div className={styles.introText}>
          <h1>Lorem Ipsum is simply dummy text.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    );
  }
}

Intro.propTypes = {
};

export default Intro;

