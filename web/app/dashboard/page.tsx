'use client';

import React, { useState } from 'react';
import NoteInput from '../components/noteInput';
import DashBoardNavbar from '../components/dashBoardNavbar';
import SaveNotes from '../lib/saveNotes';
import Rewiew from '../components/rewiew';

export default function DashboardPage() {
  const [display, setDisplay] = useState<'Notes' | 'Rewiew'>('Notes');
  return (
    <div className="flex font-semibold text-[#31292B]">
      <DashBoardNavbar Display={[display, setDisplay]} />
      {display === 'Notes' ? (
        <>
          <NoteInput />
          <SaveNotes />
        </>
      ) : (
        <Rewiew />
      )}
    </div>
  );
}
