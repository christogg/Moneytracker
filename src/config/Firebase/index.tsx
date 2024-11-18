// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHP80D04e1gRn1DZvbCKhwRMT7BD8-Jts",
  authDomain: "moneytracker-1ee54.firebaseapp.com",
  projectId: "moneytracker-1ee54",
  storageBucket: "moneytracker-1ee54.firebasestorage.app",
  messagingSenderId: "880616336750",
  appId: "1:880616336750:web:c1ac33cdcd2db322cd257f"
  databaseUrl:"https://moneytracker-1ee54-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);