import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { operations } from '../../../redux/auth';
import Button from '../../Button';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.loginUser(this.state);

    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </label>
        <Button type="submit" title="Login" />
      </form>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  loginUser: userCredentials => dispatch(operations.loginUser(userCredentials)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
