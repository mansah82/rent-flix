// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADGI7phg38Z2faFxunfGBzJcIFoBFWErk",
  authDomain: "rentflix-61154.firebaseapp.com",
  projectId: "rentflix-61154",
  storageBucket: "rentflix-61154.appspot.com",
  messagingSenderId: "398210884823",
  appId: "1:398210884823:web:d6a18812343a42f514bc92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;