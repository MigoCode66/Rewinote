import React from 'react';
import NoteInput from '../components/noteInput';
import DashBoardNavbar from '../components/dashBoardNavbar';

export default function DashboardPage() {
  return (
    <div className="flex font-semibold text-[#31292B]">
      <DashBoardNavbar />
      <NoteInput />
    </div>
  );
}
