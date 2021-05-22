import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Container from './components/Container/Container';

import AppBar from './components/AppBar';

import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "Home-View" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "Register-View" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "Login-View" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "Contacts-View" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>ЗАГРУЖАЕМ...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute path="/register" restricted component={RegisterView} />
          <PublicRoute path="/login" restricted component={LoginView} />
          <PrivateRoute path="/contacts" component={ContactsView} />
        </Switch>
      </Suspense>
    </Container>
  );
}
