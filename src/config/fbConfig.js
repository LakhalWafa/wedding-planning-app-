import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDaXyR1pAp2roNmEEw-YM9TODtlTfVBPsM',
  authDomain: 'wedding-planning-f65fd.firebaseapp.com',
  databaseURL: 'https://wedding-planning-f65fd.firebaseio.com',
  projectId: 'wedding-planning-f65fd',
  storageBucket: 'wedding-planning-f65fd.appspot.com',
  messagingSenderId: '759833530069'
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
