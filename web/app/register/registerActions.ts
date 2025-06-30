'use server';

import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { createTokens } from '../lib/cookies';
import { redirect } from 'next/navigation';
export async function createUser(
  name: string,
  surname: string,
  email: string,
  password: string,
  uid: string,
) {
  try {
    const docRef = doc(db, 'users', uid);
    await setDoc(docRef, {
      name: name,
      surname: surname,
      email: email,
      password: password,
      admin: false,
      uid: uid,
      tokens: 10000,
    });
    await createTokens(uid);
    redirect('/dashboard');
  } catch (err) {
    console.error(err);
  }
}
