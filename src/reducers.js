import { combineReducers } from 'redux';
import appReducer from 'containers/App/reducers';


const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;
