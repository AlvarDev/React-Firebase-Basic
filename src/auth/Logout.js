import React from "react";
import firebase from "./../firebase";
import { Button } from '@material-ui/core';

const Logout = () => {
	const logOut = () => {
  	firebase.auth().signOut();
  };

	return (
		<div>
			<Button color="primary" onClick={logOut}>Log Out</Button>
		</div>
	);
};

export default Logout;