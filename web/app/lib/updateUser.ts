

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { getCookies } from './cookies';

export async function updateUserData(
  name: string,
  surname: string,
  email: string,
  password: string,
  uid: string,
  tokens: number
) {
  try {
    const userIdCookie = await getCookies('userID');
    if (!userIdCookie) {
      throw new Error('User ID cookie not found');
    }
    const docRef = doc(db, 'users', userIdCookie.value);
    const document = await updateDoc(docRef, {
      name: name,
      surname: surname,
      email: email,
      password: password,
      uid: uid,
      tokens: tokens,
    });
  } catch (err) {
    console.error(err);
  }
}
