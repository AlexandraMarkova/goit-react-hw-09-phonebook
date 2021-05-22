import React, { useState, useCallback } from 'react';
 import { useDispatch } from 'react-redux';

import { login } from '../redux/auth/auth-operations';
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

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = useCallback( e => {
      e.preventDefault();

      const loginQuery = { email, password };

      dispatch(login(loginQuery));

      setEmail('');
      setPassword('');
    },[dispatch, email, password]
  );

  return (
    <div>
      <h1 style={styles.text}>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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
          Войти
        </Button>
      </form>
    </div>
  );
};