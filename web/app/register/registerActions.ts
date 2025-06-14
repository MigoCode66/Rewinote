'use server';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function createUser(
  name: string,
  surname: string,
  email: string,
  password: string
) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, 'users', user.user.uid);
    await setDoc(docRef, {
      name: name,
      surname: surname,
      email: email,
      password: password,
    });
  } catch (err) {
    console.error(err);
  }
}
