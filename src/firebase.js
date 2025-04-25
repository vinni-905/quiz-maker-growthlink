import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQJvwl0IfYMNRdD7_wOOpaIIzDREo-MLo",
  authDomain: "quizmaker-c2b8f.firebaseapp.com",
  projectId: "quizmaker-c2b8f",
  storageBucket: "quizmaker-c2b8f.appspot.com",
  messagingSenderId: "107801046082",
  appId: "1:107801046082:web:59b4cac2c2ef5732f0d1db",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
