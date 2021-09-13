import React, { useState, useEffect, Fragment } from 'react';
import firebase from './firebase';
import Logout from './auth/Logout';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
			marginBottom: 12,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function SnapshotFirebaseAdvanced() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('schools');
  const classes = useStyles();

  function getSchools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
        const schoolList = querySnapshot.docs.map(doc => doc.data());
        setSchools(schoolList);
        setLoading(false);
      });
  }

  useEffect(() => {
    getSchools();
    // eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth="lg">
			<Logout />
			<Fragment>
				<h1>Schools</h1>
				{loading ? <h1>Loading...</h1> : null}
				{schools.map((school) => (
					<Card className={classes.root} key={school.id}>
					<CardContent>
						<div className="school" >
							<h2>{school.title}</h2>
							<p>{school.desc}</p>
						</div>
						</CardContent>
					</Card>
				))}
			</Fragment>
    </Container>
  );
}

export default SnapshotFirebaseAdvanced;