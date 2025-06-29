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
          if (!userData) throw new Error('No user data');
          const docRef = doc(db, 'Notes', userData.uid);
          await setDoc(docRef, notes);
        })();
      } catch (err) {
        console.error(err);
        setSave('error');
      }
      setSave(false);
    }, 1500);
    setSave(true);
  }, [notes]);

  return (
    <div className="sticky top-[0px] h-screen">
      <div className="absolute bottom-[10px] right-[10px]">
        <p className="text-nowrap">
          {save === false || save === 'notLoded' ? 'Notes Saved' : null}
          {save === 'error' ? 'Can not save the notes' : null}
        </p>
      </div>
    </div>
  );
}

export default SaveNotes;
