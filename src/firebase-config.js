import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);