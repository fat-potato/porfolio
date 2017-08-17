import forEach from 'lodash/forEach';
import camelCase from 'lodash/camelCase';

const createEpics = (epics) => {
  const exportFunc = {};

  forEach(epics, (epic, index) => {
    exportFunc[camelCase(index)] = epic;
  });
  return exportFunc;
};
export default createEpics;
