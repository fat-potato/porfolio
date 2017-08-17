import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import styles from './styles.scss';
import { connect } from 'react-redux';
import appActions from 'containers/App/actions';

import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/NotFoundPage';

class App extends Component {
  click = () => {
    this.props.getJobs();
  }

  create = () => {
    this.props.createJob('khoi');
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.click}>get something</button>
        <button onClick={this.create}>create something</button>
        <Switch>
          <Route path="/not-found" component={NotFound} />
        </Switch>
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
