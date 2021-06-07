import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectors } from '../../redux/auth';
import styles from './AppBar.module.css';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

const AppBar = ({ isAuthorized }) => {
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthorized ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

AppBar.propTypes = {
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthorized: selectors.getIsAuthorized(state),
});

export default connect(mapStateToProps, null)(AppBar);
