import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../components/Container';
import AppBar from '../components/AppBar';
import HomePage from '../components/Pages/HomePage';
import RegisterPage from '../components/Pages/RegisterPage';
import LoginPage from '../components/Pages/LoginPage';
import ContactsPage from '../components/Pages/ContactsPage';
import routes from '../components/routes';

const App = () => {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.contacts} component={ContactsPage} />
      </Switch>
    </Container>
  );
};

export default App;
