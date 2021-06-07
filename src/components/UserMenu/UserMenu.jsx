import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button';
import { operations, selectors } from '../../redux/auth';

const UserMenu = ({ userName, handleLogout }) => {
  return (
    <div>
      <p>Welcome, {userName}</p>
      <Button title="Logout" cbOnClick={handleLogout} />
    </div>
  );
};

UserMenu.propTypes = {
  handleLogout: PropTypes.func,
  userName: PropTypes.string,
};

const mapStateToProps = state => ({
  userName: selectors.getUserName(state),
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(operations.logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
