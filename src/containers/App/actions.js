import createActions from 'utils/createActions';

const actions = {
  GET_JOBS: 'react-boilerplate/App/GET_JOBS',
  CREATE_JOB: 'react-boilerplate/App/CREATE_JOB',
};

const exp = { ...actions, ...createActions(actions) };
export default exp;
