import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/contact/contact-operations';
import { getAllContacts } from '../../redux/contact/contacts-selectors';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const styles = {
  form: {
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getAllContacts);

  const updateName = e => {
    setName(e.target.value);
  };

  const updateNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const unavailableName = contacts.find(contact => contact.name === name);
      if (unavailableName) {
        alert(`${name} is already in contacts`);
        return;
      }
      const contactQuery = { name, number };

      dispatch(operations.addContacts(contactQuery));

      setName('');
      setNumber('');
    },
    [contacts, name, number, dispatch],
  );

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <label style={styles.label} htmlFor={nameInputId}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={updateName}
        />
      </label>
      <label style={styles.label} htmlFor={numberInputId}>
        <TextField
          id="outlined-basic"
          label="number"
          variant="outlined"
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={updateNumber}
        />
      </label>
      <Button variant="contained" color="primary" type="submit">
        Add contact
      </Button>
    </form>
  );
};
