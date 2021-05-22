import React, { useState } from 'react';
 import { connect } from 'react-redux';
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

function LoginView({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const loginQuery = {email, password};

    onLogin(loginQuery);

    setEmail('');
    setPassword('');
  };

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
}

const mapDispatchToProps = {
  onLogin: login,
};
export default connect(null, mapDispatchToProps)(LoginView);


// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <h1 style={styles.text}>Страница логина</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             <TextField
//               id="outlined-basic"
//               label="email"
//               variant="outlined"
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             <TextField
//               id="outlined-basic"
//               label="password"
//               variant="outlined"
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <Button variant="contained" color="primary" type="submit">
//             Войти
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: login,
// };
// export default connect(null, mapDispatchToProps)(LoginView);
