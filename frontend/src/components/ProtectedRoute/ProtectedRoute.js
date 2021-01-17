import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({
  isLoggedIn,
  component: Component,
  ...props
}) {
  const isAuth = localStorage.getItem('auth');

  return (
    <Route exact path="/saved-news">
      {() => {
        if (isLoggedIn) {
          return <Component {...props} />;
        }
        if (isAuth) {
          return <Preloader style={{ paddingTop: '160px' }} />;
        }
        return <Redirect to={{ pathname: '/', popup: 'login' }} />;
      }}
    </Route>
  );
}

export default ProtectedRoute;
