// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV_bSPVizMGhLmDgwBvsofxXdFZs1gPo8",
  authDomain: "conectacaosocial.firebaseapp.com",
  databaseURL: "https://conectacaosocial-default-rtdb.firebaseio.com",
  projectId: "conectacaosocial",
  storageBucket: "conectacaosocial.appspot.com",
  messagingSenderId: "234134018424",
  appId: "1:234134018424:web:8c7b3da11aab816fb3d08d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getDatabase()

export default database