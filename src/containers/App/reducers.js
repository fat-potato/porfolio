import { fromJS } from 'immutable';
import appActions from 'containers/App/actions';

const initialState = fromJS({
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case appActions.GET_JOBS_SUCCESS:
      return state.set('jobs', action.data);
    case appActions.CREATE_JOB_SUCCESS:
      return state.set('job', action.data);
    default:
      return state;
  }
}
export default appReducer;
