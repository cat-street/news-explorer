import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({
  isLoggedIn, component: Component, ...props
}) {
  return (
    <Route>
      {
        () => (isLoggedIn ? <Component {...props} />
          : <Redirect to={{
            pathname: '/',
            popup: 'login',
          }}/>)
      }
    </Route>
  );
}

export default ProtectedRoute;
