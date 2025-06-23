'use client';

import { doc, getDoc } from 'firebase/firestore';
import { getCookies } from './cookies';
import { db } from '../firebase/config';
import { cache } from 'react';
import { userDataType } from './userDataContext';
import { verify } from './verify';

async function getUserNotes() {
  try {
    await verify();
    const userIdCookie = await getCookies('userID');
    if (!userIdCookie) {
      throw new Error('User ID cookie not found');
    }
    const docRef = doc(db, 'Notes', userIdCookie.value);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const docData = docSnap.data() as userDataType;
      return docData;
    } else return { error: 'Notes data not found' };
  } catch (err) {
    return { error: 'somthing went wrong' };
  }
}

export default cache(getUserNotes);
