import React from "react";
import { TextField, Button } from "@material-ui/core";
import { toast } from "react-toastify";
import * as auth from "../../services/auth";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const login = () => {
    history.push("/login");
  };

  const signup = () => {
    if (!name || !password || !email || !username) {
      return toast.error("Veuillez remplir les champs");
    }
    auth
      .signup(name, email, username, password)
      .then(() => {
        history.push("/login");
        toast.success("Compte créé !");
      })
      .catch((err) => toast.error("Champs mal remplis"));
  };

  return (
    <div className="d-flex align-items-center flex-column">
      <h3>Sign up</h3>
      <form className="d-flex align-items-center flex-column" onSubmit={login}>
        <div className="mt-3">
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mt-3">
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mt-3">
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mt-3">
          <TextField
            label="Password"
            variant="outlined"
            value={password}
            type="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mt-3">
          <Button variant="contained" color="primary" onClick={login}>
            Sign in
          </Button>
          <Button
            className="ml-2"
            variant="contained"
            color="primary"
            onClick={signup}
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
