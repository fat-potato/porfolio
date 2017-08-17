import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import logger from 'redux-logger';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware, logger)
);
export default store;
