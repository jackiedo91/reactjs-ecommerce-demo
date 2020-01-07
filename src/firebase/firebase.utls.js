import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
  apiKey: "AIzaSyAFpR35a4Gmc4dbLB-7S37iaAiDqSRQDsk",
  authDomain: "reactjs-crwn-db.firebaseapp.com",
  databaseURL: "https://reactjs-crwn-db.firebaseio.com",
  projectId: "reactjs-crwn-db",
  storageBucket: "reactjs-crwn-db.appspot.com",
  messagingSenderId: "555592093917",
  appId: "1:555592093917:web:a23053ce5d2fd82d88cb34",
  measurementId: "G-LV5HL0BMKH"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
