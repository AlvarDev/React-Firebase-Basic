import React, { useContext } from "react";
import { AuthContext } from "./auth/Auth";
import Login from './auth/Login';
import SnapshotFirebaseAdvanced from './SnapshotFirebaseAdvanced';

const Wrapper = () => {
  const { currentUser } = useContext(AuthContext);
  return <>{currentUser ? <SnapshotFirebaseAdvanced /> : <Login />}</>;
};

export default Wrapper;