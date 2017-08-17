import React from 'react';
import { Switch, Router } from 'react-router-dom';
import PublicRoute from 'utils/PublicRoute';
import createHistory from 'history/createBrowserHistory';
import App from 'containers/App';

export const history = createHistory();

function AppRoute() {
  return (
    <Router history={history}>
      <div className="appWrapper">
        <Switch>
          {PublicRoute({
            path: '/',
            component: App,
          })}
        </Switch>
      </div>
    </Router>
  );
}
export default AppRoute;
