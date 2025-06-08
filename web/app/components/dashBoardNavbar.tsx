'use client';

import { PlusIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { noteContext } from '../lib/noteContext';

const DashBoardNavbar = () => {
  const [notes, setNotes] = useContext(noteContext);

  const noteAddCickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    const date = new Date();
    const id = date.getTime() + Math.random().toString();
    setNotes({
      current: id,
      notes: {
        ...notes.notes,
        [id]: {
          title: 'New Notebook',
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
  };
  return (
    <nav className="w-[270px] h-screen bg-[#F8F8F7] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sticky top-0 flex flex-col p-[25px] gap-[40px]">
      {/* User */}
      <div className="flex items-center gap-[20px]">
        <div className="w-[36px] h-[36px] bg-[#CCCCCC] rounded-[8px] "></div>
        <p>Juliusz Błoński</p>
      </div>
      {/* Note list */}
      <ul className="flex flex-col gap-[10px]">
        {/* Title */}
        <li
          className="flex items-center justify-between hover:[&_.icon]:opacity-100 cursor-pointer "
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
          console.log(obj);
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
