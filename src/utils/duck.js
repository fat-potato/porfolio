const getFulfilled = (action) => (data) => ({ type: `${action.replace(/_PENDING$/i, '')}_SUCCESS`, data });
const getRejected = (action) => (error) => ({ type: `${action.replace(/_PENDING$/i, '')}_ERROR`, error });


function watcher(duck) {
  return duck.handler(duck.ac.data)
    .map(data => {
      const { response } = data;
      // const { body, meta } = response;
      if (response) {
        return duck.success(response);
      }
      return duck.error(response);
    });
}

const createEpic = (action, handler) => (action$) => {
  const aac = action;
  return action$.ofType(aac)
    .switchMap(ac => watcher({
      aac,
      success: getFulfilled(aac),
      error: getRejected(aac),
      handler,
      ac,
    }));
};
export { createEpic, getFulfilled, getRejected };

