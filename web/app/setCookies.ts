'use server';

import { cookies } from 'next/headers';

export async function setCookies(cookie: string) {
  const cookieStore = await cookies();
  cookieStore.set('userID', cookie);
}
