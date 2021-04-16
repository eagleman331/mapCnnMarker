import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPxTDUt26cxwj5D3Z6FTmNFP03rStWO4s",
  authDomain: "my-project-1-eb7c8.firebaseapp.com",
  projectId: "my-project-1-eb7c8",
  storageBucket: "my-project-1-eb7c8.appspot.com",
  messagingSenderId: "491150437668",
  appId: "1:491150437668:web:0dd1f78c411460fba6d7b1"
};
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
