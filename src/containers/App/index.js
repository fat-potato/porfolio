import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import appActions from 'containers/App/actions';
import Section from 'containers/Section';
import Intro from 'components/Intro';
import Portfolio from 'components/Portfolio';

import styles from './styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Section
          text="Introduction"
          number="01"
          component={<Intro />}
          backgroundImage="https://images.unsplash.com/photo-1490598000245-075175152d25?dpr=2&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="
        />
        <Section
          text="Portfolio"
          number="02"
          component={<Portfolio />}
          backgroundColor="#ccc"
        />
      </div>
    );
  }
}

App.propTypes = {
  getJobs: PropTypes.func,
  createJob: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => dispatch(appActions.getJobs()),
  createJob: (data) => dispatch(appActions.createJob(data)),
});

export default connect(null, mapDispatchToProps)(App);
