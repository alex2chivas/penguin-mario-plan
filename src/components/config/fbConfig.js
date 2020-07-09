import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDwSDfDR2oB_LqJd7xBOVwxa4zKyKhbPqM",
    authDomain: "alex-marioplan-15f34.firebaseapp.com",
    databaseURL: "https://alex-marioplan-15f34.firebaseio.com",
    projectId: "alex-marioplan-15f34",
    storageBucket: "alex-marioplan-15f34.appspot.com",
    messagingSenderId: "850391479841",
    appId: "1:850391479841:web:bd3aeaeccec88cda6c9560",
    measurementId: "G-F3L20YBGRK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;