'use server';

import { cookies } from 'next/headers';

export async function createTokens(uid: string) {
  const cookieStore = await cookies();
  cookieStore.set('userID', uid, { httpOnly: true });
}
export async function getCookies(cookie: string) {
  const cookieStore = await cookies();
  return cookieStore.get(cookie);
}
