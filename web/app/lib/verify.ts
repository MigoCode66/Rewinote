'use server';

import { cookies } from 'next/headers';
import getUserData from './getUserData';
import { redirect } from 'next/navigation';

export async function verify() {
  const userData = await getUserData();
  const cookieStore = await cookies();
  const accesToken = cookieStore.get('accesToken');
  if ('accesToken' in userData && userData.accesToken) {
    if (!(accesToken?.value === userData.accesToken) || !accesToken) {
      redirect('/');
    }
  }
}
