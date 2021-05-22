import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from 'react-loader-spinner';

import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/contact/contact-operations';
import { getLoading, getError } from '../redux/contact/contacts-selectors';

const styles = {
  text: {
    textAlign: 'center',
  },
};

export default function ContactsView() {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={styles.text}>Phonebook</h1>

      {error && <h1>Sorry, please try later</h1>}

      <ContactForm />

      <h2 style={styles.text}>Contacts</h2>

      <Filter />
      {loading && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <ContactList />
    </div>
  );
};
