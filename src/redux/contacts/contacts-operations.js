import axios from 'axios';
import * as actions from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  return axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

const addContact = contact => dispatch => {
  dispatch(actions.addContactRequest());

  return axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  return axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

export default { addContact, deleteContact, fetchContacts };
