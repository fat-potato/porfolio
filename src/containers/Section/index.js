import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SectionTitle from 'components/SectionTitle';

import styles from './styles.scss';
class Section extends Component {
  render() {
    return (
      <div
        className={styles.section}
        style={{ backgroundColor: this.props.backgroundColor || 'transparent', backgroundImage: `url(${this.props.backgroundImage})` || 'none' }}
      >
        <SectionTitle
          number={this.props.number}
          text={this.props.text}
        />
        {this.props.component}
      </div>
    );
  }
}

Section.propTypes = {
  number: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  component: PropTypes.node,
};

export default Section;

