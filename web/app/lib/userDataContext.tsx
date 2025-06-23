'use client';
import { createContext, useEffect, useState } from 'react';
import getUserData from './getUserData';

export interface userDataType {
  uid: string;
  admin: boolean;
  email: string;
  name: string;
  password: string;
  surname: 'Błoński';
}

export const userDataContext = createContext<
  | [
      userDataType | null,
      React.Dispatch<React.SetStateAction<userDataType | null>>
    ]
  | null
>(null);

const UserDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userData, setUserData] = useState<userDataType | null>(null);
  useEffect(() => {
    (async () => {
      const dbUserData = await getUserData();
      console.log(dbUserData);
      if (dbUserData && !('error' in dbUserData)) {
        setUserData(dbUserData);
      }
    })();
  }, []);
  return (
    <userDataContext.Provider value={[userData, setUserData]}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserDataContextProvider;
