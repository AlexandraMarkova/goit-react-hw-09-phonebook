import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const styles = {
  text: {
    textAlign: 'center',
  },
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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const updateName = e => {
     setName(e.target.value);
   };

   const updateEmail = e => {
     setEmail(e.target.value);
   };

   const updatePassword = e => {
     setPassword(e.target.value);
  };
  

  const handleSubmit = useCallback( e => {
      e.preventDefault();

      const loginQuery = { name, email, password };

      dispatch(register(loginQuery));

      setEmail('');
      setPassword('');
    },[dispatch, name, email, password]
  );


  return (
    <div>
      <h1 style={styles.text}>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={updateName}
          />
        </label>

        <label style={styles.label}>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>

        <label style={styles.label}>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>

        <Button variant="contained" color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};
