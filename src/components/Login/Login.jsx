import React from 'react';
import {
    TextField,
    Button,
} from "@material-ui/core";
import { toast } from "react-toastify";
import * as auth from '../../services/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const signup = () => {
      history.push('/signup');
    }

    const login = () => {
      if (!name  || !password) {
        return toast.error('Veuillez remplir les champs')
      }
      auth.login(name, password)
        .then(response => {
          localStorage.setItem('token', response.data.accessToken)
          history.push('/patients')
          toast.success('Vous êtes connecté !')
        })
        .catch(err => toast.error(err.response.data.message));
    };

    return (
    <div className="d-flex align-items-center flex-column">
        <h3>Login</h3>
        <form className="d-flex align-items-center flex-column" onSubmit={login}>
          <div className="mt-3">
            <TextField
              id="standard-name"
              label="Email or username"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="mt-3">
              <TextField
                id="standard-password-input"
                label="Password"
                variant="outlined"
                value={password}
                type="password"
                autoComplete="current-password"
                onChange={handlePasswordChange}
              />
          </div>
          <div className="mt-3">
            <Button variant="contained" color="primary" onClick={signup}>
              Sign up
            </Button>
            <Button className="ml-2" variant="contained" color="primary" onClick={login}>
              Sign in
            </Button>
          </div>
      </form>
    </div>

    )
};

export default Login;