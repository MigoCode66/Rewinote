import getUserData from './getUserData';
import { redirect } from 'next/navigation';
import { getCookies } from './cookies';
export async function verify() {
  const userData = await getUserData();
  const accesToken = await getCookies('userID');
  if (
    userData &&
    'userID' in userData &&
    typeof (userData as any).accesToken === 'string'
  ) {
    if (!(accesToken?.value === (userData as any).accesToken) || !accesToken) {
      redirect('/');
    }
  }
}
