import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AppBar/AppBar.module.css';
import routes from '../routes';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={routes.register}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to={routes.login}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
