import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../Button';
import { operations } from '../../../redux/auth';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.registerUser(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  static propTypes = { registerUser: PropTypes.func };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
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
            minLength="7"
          />
        </label>
        <Button type="submit" title="Register" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  registerUser: userCredentials =>
    dispatch(operations.registerUser(userCredentials)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
