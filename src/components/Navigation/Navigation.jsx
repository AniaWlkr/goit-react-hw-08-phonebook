import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AppBar/AppBar.module.css';
import routes from '../routes';

const Navigation = () => {
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
      <NavLink
        to={routes.contacts}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
