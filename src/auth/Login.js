import React, { useState } from "react";
import firebase from "./../firebase";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
        alert('No User found')
      });
  };

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <Container maxWidth="lg">
      <h1>Login</h1>
      <div>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/> <br/>
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/><br/>
        <Button onClick={login}>GO!</Button>
      </div>
      </Container>
  );
};

export default Login;