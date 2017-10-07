import * as firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDEtLi63ypm5TL3TXNqTdgnCLofq4mz95M",
  authDomain: "meetup-ca3da.firebaseapp.com",
  databaseURL: "https://meetup-ca3da.firebaseio.com",
  projectId: "meetup-ca3da",
  storageBucket: "meetup-ca3da.appspot.com",
  messagingSenderId: "955331031168"
});

export const db = firebaseApp.database();
export const auth = firebaseApp.auth();

export default firebase;