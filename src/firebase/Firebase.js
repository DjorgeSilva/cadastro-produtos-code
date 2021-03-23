import firebase from "firebase"
import "firebase/storage"
import "firebase/firestore"

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAVyV7PX3hYvkz1eUST0OiArlflietzJ0s",
    authDomain: "contact-form-11876.firebaseapp.com",
    projectId: "contact-form-11876",
    storageBucket: "contact-form-11876.appspot.com",
    messagingSenderId: "925206359858",
    appId: "1:925206359858:web:247d8588a53371017f712b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//   const projectStorage = firebase.storage();
  const db = firebase.firestore();
//   const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db}
  