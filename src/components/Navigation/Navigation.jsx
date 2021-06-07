import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../AppBar/AppBar.module.css';
import routes from '../routes';
import { selectors } from '../../redux/auth';

const Navigation = ({ isAuthorized }) => {
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      {isAuthorized && (
        <NavLink
          to={routes.contacts}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthorized: selectors.getIsAuthorized(state),
});

export default connect(mapStateToProps)(Navigation);
