import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAJFRJuVRnfp3W7J9JCuSUibMkkG75eJ_c",
  authDomain: "clone-8fa8c.firebaseapp.com",
  projectId: "clone-8fa8c",
  storageBucket: "clone-8fa8c.appspot.com",
  messagingSenderId: "73619957442",
  appId: "1:73619957442:web:855d34586884fce0dbbd5b",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { db, auth, provider };
