import camelCase from 'lodash/camelCase';
import forEach from 'lodash/forEach';

const createActions = (actions) => {
  const exportFunc = {};

  forEach(actions, (action, index) => {
    const isPending = index;
    const isFulfilled = `${index}_SUCCESS`;
    const isRejected = `${index}_ERROR`;

    const pendingAction = `${action}_PENDING`;
    const fulfilledAction = `${action}_SUCCESS`;
    const rejectedAction = `${action}_ERROR`;

    exportFunc[isPending] = pendingAction;
    exportFunc[isFulfilled] = fulfilledAction;
    exportFunc[isRejected] = rejectedAction;

    exportFunc[camelCase(isPending)] = (data, meta) => ({ type: pendingAction, data, meta });
    exportFunc[camelCase(isFulfilled)] = (data) => ({ type: fulfilledAction, data });
    exportFunc[camelCase(isRejected)] = (error) => ({ type: rejectedAction, error });
  });
  return exportFunc;
};
export default createActions;
