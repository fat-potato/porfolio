import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import AppRoute from 'AppRoute';
import store from './store';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppRoute />
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
