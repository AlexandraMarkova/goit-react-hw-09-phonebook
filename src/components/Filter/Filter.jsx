import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contact/contact-actions';
import { getFilter } from '../../redux/contact/contacts-selectors';
import TextField from '@material-ui/core/TextField';

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};
export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = useCallback(e => dispatch(changeFilter(e.target.value)), [dispatch]);

  return (
    <div>
      <label style={styles.label}>
        <TextField
          id="outlined-basic"
          label=" Find contacts by name"
          variant="outlined"
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
