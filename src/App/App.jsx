import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes from '../components/routes';
import { operations, selectors } from '../redux/auth';
import Container from '../components/Container';
import AppBar from '../components/AppBar';
import Loader from '../components/Loader';

const HomePage = lazy(() => import('../components/Pages/HomePage'));
const RegisterPage = lazy(() => import('../components/Pages/RegisterPage'));
const LoginPage = lazy(() => import('../components/Pages/LoginPage'));
const ContactsPage = lazy(() => import('../components/Pages/ContactsPage'));

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { isAuthorized } = this.props;

    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route
              path={routes.register}
              render={props =>
                !isAuthorized ? (
                  <RegisterPage {...props} />
                ) : (
                  <Redirect to={routes.contacts} />
                )
              }
            />
            <Route
              path={routes.login}
              render={props =>
                !isAuthorized ? (
                  <LoginPage {...props} />
                ) : (
                  <Redirect to={routes.contacts} />
                )
              }
            />
            <Route
              path={routes.contacts}
              render={props =>
                isAuthorized ? (
                  <ContactsPage {...props} />
                ) : (
                  <Redirect to={routes.login} />
                )
              }
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

App.propTypes = {
  getCurrentUser: PropTypes.func,
  isAuthorized: PropTypes.bool,
};

const mapDispatchToProps = {
  getCurrentUser: operations.getCurrentUser,
};

const mapStateToProps = state => ({
  isAuthorized: selectors.getIsAuthorized(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
