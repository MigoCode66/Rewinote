'server only';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyCFyR-EYfsA46R12klpt0HaNhXQgYsP0A0',
  authDomain: 'rewinote-b4d24.firebaseapp.com',
  projectId: 'rewinote-b4d24',
  storageBucket: 'rewinote-b4d24.firebasestorage.app',
  messagingSenderId: '392299206633',
  appId: '1:392299206633:web:23feced34e084ee2cd1d78',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
