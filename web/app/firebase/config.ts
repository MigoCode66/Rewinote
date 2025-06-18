// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBh11hSTdPqBlViqOhfu0UM10groohx0dg',
  authDomain: 'rewinote-33b24.firebaseapp.com',
  projectId: 'rewinote-33b24',
  storageBucket: 'rewinote-33b24.firebasestorage.app',
  messagingSenderId: '1071025075100',
  appId: '1:1071025075100:web:fff74e970b50173bbc0e59',
  measurementId: 'G-17C8QR501P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
