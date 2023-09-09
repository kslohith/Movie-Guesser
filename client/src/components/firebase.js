// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR7uoWoBbs22HLNSueqiemYzmD3pvOHWY",
  authDomain: "movie-guesser-a636b.firebaseapp.com",
  projectId: "movie-guesser-a636b",
  storageBucket: "movie-guesser-a636b.appspot.com",
  messagingSenderId: "155246612411",
  appId: "1:155246612411:web:81a2f0fbe9c1bea22bbe9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;