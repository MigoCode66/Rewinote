'use server';


import { doc, getDoc } from 'firebase/firestore';
import { cookies } from 'next/headers';
import { db } from '../firebase/config';
import { cache } from 'react';
import { userDataType } from './userDataContext';

async function getUserData() {
  try {
    const cookieStore = await cookies();
    const userIdCookie = cookieStore.get('userID');
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
    return { error: 'somthing went wrong' };
  }
}

export default cache(getUserData);
