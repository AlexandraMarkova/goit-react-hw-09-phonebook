import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from './avatar.png';
import { Button } from '@material-ui/core';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const onLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="80" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <Button variant="contained" type="button" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
};
