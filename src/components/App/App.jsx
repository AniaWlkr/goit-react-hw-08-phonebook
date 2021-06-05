import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';
import { operations } from '../../redux/contacts';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.headTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
