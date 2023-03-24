// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZJK-s_7uqjkBRkcu0ngcN2wSiT6PaM8s",
  authDomain: "uploadreact-a3bdb.firebaseapp.com",
  projectId: "uploadreact-a3bdb",
  storageBucket: "uploadreact-a3bdb.appspot.com",
  messagingSenderId: "1084923427916",
  appId: "1:1084923427916:web:88318866babcdb4d9fc8e9",
  measurementId: "G-8KYB7TY7DZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);