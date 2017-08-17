import { combineEpics } from 'redux-observable';
import appEpics from 'containers/App/epics';

const rootEpics = combineEpics(...appEpics);
export default rootEpics;
