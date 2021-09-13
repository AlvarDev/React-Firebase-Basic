import React from 'react';
import { AuthProvider } from './auth/Auth';
import Welcome from './Welcome';
import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <AuthProvider>
        <Welcome />
        <Wrapper />
      </AuthProvider>
    </>
  );
}

export default App;

//DOCS: https://firebase.google.com/docs/firestore/