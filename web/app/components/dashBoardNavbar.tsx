'use client';

import { PlusIcon } from 'lucide-react';
import React, { SetStateAction, useContext } from 'react';
import { noteContext } from '../lib/noteContext';
import { userDataContext } from '../lib/userDataContext';

const DashBoardNavbar = ({
  Display,
}: {
  Display: [
    'Notes' | 'Rewiew',
    React.Dispatch<SetStateAction<'Notes' | 'Rewiew'>>
  ];
}) => {
  // Hooks
  const [notes, setNotes] = useContext(noteContext);
  const userDataContextValue = useContext(userDataContext);
  const [userData, setUserData] = userDataContextValue ?? [null, () => {}];
  const [display, setDisplay] = Display;
  //

  const noteAddCickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const date = new Date();
    const id = date.getTime() + Math.random().toString();
    setDisplay('Notes');
    setNotes({
      current: id,
      notes: {
        ...notes.notes,
        [id]: {
          title: 'New note',
          content: null,
        },
      },
    });
  };

  const noteCickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setNotes({
      current: (e.target as HTMLElement).id,
      notes: { ...notes.notes },
    });
    setDisplay('Notes');
  };

  return (
    <nav className="w-[270px] h-screen bg-[#F8F8F7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sticky top-0 flex flex-col p-[25px] gap-[20px] items-start">
      {/* User */}

      <div className="flex items-center gap-[20px]">
        <p>
          {userData?.name} {userData?.surname}
        </p>
      </div>

      {/* Rewiew Button */}

      <button
        className="pl-[20px] pr-[20px] h-[30px] bg-[#979797] text-[#ffffff] rounded-[8px] cursor-pointer hover:bg-[#7e7e7e] transition-colors"
        onClick={() => {
          setDisplay('Rewiew');
          setNotes({
            current: null,
            notes: { ...notes.notes },
          });
        }}
      >
        Rewiew Notes
      </button>

      {/* Note list */}

      <ul className="flex flex-col gap-[10px] w-full">
        {/* Title */}

        <li
          className="flex items-center justify-between hover:[&_.icon]:opacity-100 cursor-pointer"
          onClick={noteAddCickHandler}
        >
          <p className="text-[#B7B7B7] text-[0.9rem]">Notes</p>
          <PlusIcon
            className="icon w-[16px] h-[16px] opacity-0 transition-opacity duration-100"
            color="#B7B7B7"
          />
        </li>

        {/* Note */}

        {Object.entries(notes.notes).map((obj, key) => {
          return (
            <li
              className={`${
                obj[0] === notes.current ? 'text-[#000000]' : 'text-[#979797]'
              }  cursor-pointer`}
              key={key}
              id={obj[0]}
              onClick={noteCickHandler}
            >
              <p id={obj[0]}>{obj[1].title}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DashBoardNavbar;
