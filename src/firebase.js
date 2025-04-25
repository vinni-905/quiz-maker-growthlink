// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQJvwl0IfYMNRdD7_wOOpaIIzDREo-MLo",  // Ensure this is your actual API key
  authDomain: "quizmaker-c2b8f.firebaseapp.com",   // Ensure the domain is correct
  projectId: "quizmaker-c2b8f",
  storageBucket: "quizmaker-c2b8f.appspot.com",  // Ensure this is correct
  messagingSenderId: "107801046082",
  appId: "1:107801046082:web:59b4cac2c2ef5732f0d1db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);
