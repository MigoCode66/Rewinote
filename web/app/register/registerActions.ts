'use server';

import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import crypto from 'crypto';
import { createTokens } from '../lib/createTokens';
export async function createUser(
  name: string,
  surname: string,
  email: string,
  password: string,
  uid: string
) {
  try {
    const accesToken = crypto
      .createHash('sha256')
      .update(uid + Math.random().toString())
      .digest('base64');

    const docRef = doc(db, 'users', uid);
    await setDoc(docRef, {
      name: name,
      surname: surname,
      email: email,
      password: password,
      admin: false,
      accesToken: accesToken,
    });
    await createTokens(uid);
  } catch (err) {
    console.error(err);
  }
}
