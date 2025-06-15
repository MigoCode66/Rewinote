'use server';

import { cookies } from 'next/headers';
import getUserData from './getUserData';
export async function createTokens(uid: string) {
  const cookieStore = await cookies();
  cookieStore.set('userID', uid, { httpOnly: true });

  const userData = await getUserData();
  const accesToken = userData.accesToken;
  if (accesToken) {
    cookieStore.set('accesToken', accesToken);
  }
}
