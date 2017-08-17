import { createEpic } from 'utils/duck';
import createEpics from 'utils/createEpics';
import appActions from 'containers/App/actions';
import values from 'lodash/values';

import api from 'api';

const epics = {
  GET_JOBS: createEpic(appActions.GET_JOBS, api.app.getJobs.bind(api.app)),
  CREATE_JOB: createEpic(appActions.CREATE_JOB, api.app.createJob.bind(api.app)),
};

const ep = { ...createEpics(epics) };
export default values(ep);

