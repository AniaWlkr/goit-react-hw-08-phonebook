import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import ContactFilter from '../ContactFilter/ContactFilter';
import Loader from '../Loader';
import { operations, selectors } from '../../redux/contacts';
import Button from '../Button/Button';

const ContactList = ({
  contacts,
  handleDelete,
  // handleChange,
  isLoadingContacts,
}) => (
  <div className={styles.section}>
    <ContactFilter />
    {isLoadingContacts && <Loader />}
    {contacts.length ? (
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.item}>
            {contact.name}: {contact.number}
            {/* <Button
              type="button"
              cbOnClick={handleChange}
              cbArgs={[contact.id]}
              className={styles.button}
              title="Change &nbsp; 📝"
            /> */}
            <Button
              type="button"
              cbOnClick={handleDelete}
              cbArgs={[contact.id]}
              className={styles.button}
              title="Delete &nbsp; ❌"
            />
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.notification}>
        <span role="img" aria-label="sad face icon">
          😔
        </span>{' '}
        No name in Phonebook
      </p>
    )}
  </div>
);

ContactList.propTypes = {
  value: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  // handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  isLoadingContacts: PropTypes.bool,
};

const mapStateToProps = state => ({
  contacts: selectors.getFilteredContacts(state),
  isLoadingContacts: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  handleDelete: contactId => dispatch(operations.deleteContact(contactId)),
  // handleChange: contactId => dispatch(operations.changeContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
