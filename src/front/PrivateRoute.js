import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// PrivateRoute component will check if the user is authenticated
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is logged in (i.e., if there's a token)

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} /> // Render the component if authenticated
        ) : (
          <Redirect to="/Login" /> // Redirect to Login if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;