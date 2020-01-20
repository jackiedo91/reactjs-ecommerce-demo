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

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
 const transformedCollection = collections.docs.map(doc => {
   const { title, items } = doc.data();

   return {
     routeName: encodeURI(title.toLowerCase()),
     id: doc.id,
     title,
     items
   };
 })

 return transformedCollection.reduce((accumulator, collection) => {
   accumulator[collection.title.toLowerCase()] = collection
   return accumulator
 }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


export default firebase;
