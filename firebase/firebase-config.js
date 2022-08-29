// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbwKmDNo34CuYpLM9-ldmp5tT3CbYB0N4",
  authDomain: "padiq-fcfa8.firebaseapp.com",
  projectId: "padiq-fcfa8",
  storageBucket: "padiq-fcfa8.appspot.com",
  messagingSenderId: "583851733162",
  appId: "1:583851733162:web:3615cc4d286597f7a820d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const firestore = getFirestore(app);
