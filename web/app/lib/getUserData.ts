'use client';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { cache } from 'react';
import { userDataType } from './userDataContext';
import { getCookies } from './cookies';

async function getUserData() {
  try {
    const userIdCookie = await getCookies('userID');
    if (!userIdCookie) {
      throw new Error('User ID cookie not found');
    }
    const docRef = doc(db, 'users', userIdCookie.value);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const docData = docSnap.data() as userDataType;
      return docData;
    } else return { error: 'User data not found' };
  } catch (err) {
    return { error: err };
  }
}

export default cache(getUserData);
