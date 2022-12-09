// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5TbIsbOQ2s42KXXQAxzFkpo8NJArtiPE",
  authDomain: "todo-a1d02.firebaseapp.com",
  projectId: "todo-a1d02",
  storageBucket: "todo-a1d02.appspot.com",
  messagingSenderId: "583691435987",
  appId: "1:583691435987:web:43ff0f4fa5a7a9a9cf7926",
  measurementId: "G-MG2HM3WECD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
