import firebase from "firebase/app";

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCccNdEgml7xg5iz_YhF6AAR4TTMqKrVuo",
    authDomain: "auth-app-8af52.firebaseapp.com",
    databaseURL: "https://auth-app-8af52.firebaseio.com",
    projectId: "auth-app-8af52",
    storageBucket: "auth-app-8af52.appspot.com",
    messagingSenderId: "299609958427",
    appId: "1:299609958427:web:56327fcb919c314c6c30be",
    measurementId: "G-H0L8WD3D1R"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();