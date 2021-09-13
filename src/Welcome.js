import React, { useContext } from "react";
import { AuthContext } from "./auth/Auth";
import Container from '@material-ui/core/Container';

const Welcome = () => {
  const { currentUser } = useContext(AuthContext);
  const currentUserEmail = currentUser ? currentUser.email : "";

  return (
    <Container maxWidth="lg">
      <h2>{`Welcome ${currentUserEmail}`}</h2>
    </Container>
  );
};

export default Welcome;