import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import ContactFilter from '../ContactFilter/ContactFilter';
import Loader from '../Loader';
import { operations, selectors } from '../../redux/contacts';

const ContactList = ({ contacts, handleDelete, isLoadingContacts }) => (
  <div className={styles.section}>
    <ContactFilter />
    {isLoadingContacts && <Loader />}
    {contacts.length ? (
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.item}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => handleDelete(contact.id)}
              className={styles.button}
            >
              Delete{' '}
              <span role="img" aria-label="delete icon">
                ❌
              </span>
            </button>
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
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: selectors.getFilteredContacts(state),
  isLoadingContacts: selectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  handleDelete: contactId => dispatch(operations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
