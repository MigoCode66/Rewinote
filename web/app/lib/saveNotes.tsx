'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { noteContext } from './noteContext';
import { doc, setDoc } from 'firebase/firestore';
import { userDataContext } from './userDataContext';
import { db } from '../firebase/config';
function SaveNotes() {
  const [notes, setNotes] = useContext(noteContext);
  const userDataContextValue = useContext(userDataContext);
  const [userData, setUserData] = userDataContextValue ?? [null, () => {}];
  const [save, setSave] = useState<boolean | 'error' | 'notLoded' | 'loding'>(
    'notLoded'
  );
  console.log(notes);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  useEffect(() => {
    if (save === 'notLoded') {
      setSave('loding');
      return;
    }
    if (save === 'loding') {
      setSave(false);
      return;
    }
    if (save === true) {
      clearTimeout(timeoutRef.current);
      console.log('Interval saved');
    }
    timeoutRef.current = setTimeout(() => {
      try {
        (async () => {
          console.log(userData);
          if (!userData?.accesToken) throw new Error('No access token');
          const docRef = doc(db, 'Notes', userData.accesToken.replace('/', ''));
          await setDoc(docRef, notes);
        })();
      } catch (err) {
        console.error(err);
        setSave('error');
      }
      setSave(false);
    }, 3000);
    setSave(true);
  }, [notes]);

  return (
    <div className="absolute bottom-[10px] right-[10px]">
      <p>
        {save === false || save === 'notLoded' ? 'Notes Saved' : null}
        {save === 'error' ? 'Can not save the notes' : null}
      </p>
    </div>
  );
}

export default SaveNotes;
