// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCw48Ca7av0iXg4D55JshhEq4RNeakeinY",
  authDomain: "syde-26-database.firebaseapp.com",
  databaseURL: "https://syde-26-database-default-rtdb.firebaseio.com",
  projectId: "syde-26-database",
  storageBucket: "syde-26-database.appspot.com",
  messagingSenderId: "912669557844",
  appId: "1:912669557844:web:58a8c75ee2a0cacdb559c1",
  measurementId: "G-7NEV6X6X7Z"

};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//const analytics = getAnalytics(app);