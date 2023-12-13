import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';
import clearNav from './clearNav';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
  clearDom();
  clearNav();
};

export { signIn, signOut };
