'use server';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { cookies } from 'next/headers';

export async function createUser(
  name: string,
  surname: string,
  email: string,
  password: string,
  uid: string
) {
  try {
    const cookieStore = await cookies();
    
    const docRef = doc(db, 'users', uid);
    await setDoc(docRef, {
      name: name,
      surname: surname,
      email: email,
      password: password,
      admin: false,
    });
    cookieStore.set('userID', uid);
  } catch (err) {
    console.error(err);
  }
}
