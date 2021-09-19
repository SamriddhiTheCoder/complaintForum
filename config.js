import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBqcR7IDJn3M0y-wpSL3fKLdkJNUoTkocI",
  authDomain: "complaintforum-9e16b.firebaseapp.com",
  projectId: "complaintforum-9e16b",
  storageBucket: "complaintforum-9e16b.appspot.com",
  messagingSenderId: "732076337448",
  appId: "1:732076337448:web:05ba9dcd4e919086a9881d"
};
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

