'use server';

import { doc, getDoc } from 'firebase/firestore';
import { cookies } from 'next/headers';
import { db } from '../firebase/config';
import { cache } from 'react';
import { userDataType } from './userDataContext';
import { verify } from './verify';
import { note } from './noteContext';

async function getUserNotes() {
  try {
    await verify();
    const cookieStore = await cookies();
    const userAcessTokenCookie = cookieStore.get('accesToken');
    if (!userAcessTokenCookie) {
      throw new Error('User ID cookie not found');
    }
    const docRef = doc(db, 'Notes', userAcessTokenCookie.value);
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
