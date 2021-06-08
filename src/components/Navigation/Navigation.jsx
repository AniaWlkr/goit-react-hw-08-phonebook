import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import commonStyles from '../commonStyles/linkComStyles.module.css';
import styles from './Navigation.module.css';
import classnames from 'classnames';
import routes from '../routes';
import { selectors } from '../../redux/auth';

const Navigation = ({ isAuthorized }) => {
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        className={classnames(commonStyles.link, styles.linkHome)}
        activeClassName={commonStyles.activeLink}
      >
        Home
      </NavLink>
      {isAuthorized && (
        <NavLink
          to={routes.contacts}
          exact
          className={commonStyles.link}
          activeClassName={commonStyles.activeLink}
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
