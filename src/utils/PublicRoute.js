import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} {...rest} />
      )}
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.object,
};
export default PublicRoute;

