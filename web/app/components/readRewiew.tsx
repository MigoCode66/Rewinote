'use client';

import { useContext } from 'react';
import { noteContext } from '../lib/noteContext';

const ReadReview = ({
  Display,
}: {
  Display: [
    'select' | 'readNotes' | 'anserQuestions',
    React.Dispatch<
      React.SetStateAction<'select' | 'readNotes' | 'anserQuestions'>
    >
  ];
}) => {
  // Only read note verable
  const notes = useContext(noteContext)[0];

  const [dispaly, setDisplay] = Display;

  if (notes.current) {
    if (
      notes.notes[notes.current].content &&
      (notes.notes[notes.current].content?.includes('<') ||
        notes.notes[notes.current].content?.includes('>'))
    ) {
      return (
        <div className="">
          <p>Somthing went wrong</p>
        </div>
      );
    }
  }
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisplay('anserQuestions');
  };
  return (
    <div className="w-[calc(100vw-270px)]  flex flex-col gap-[20px]">
      <h1 className="text-[2.5rem]  mt-[125px] ml-[9vw]">
        Firstly read your note
      </h1>
      <p className="pl-[9vw] pr-[9vw] text-[1.1rem] leading-[150%]">
        {notes.current ? (
          notes.notes[notes.current].content?.split('\n').map((text, key) => {
            return (
              <span key={key}>
                {text}
                <br />
              </span>
            );
          })
        ) : (
          <p>Somthing went wrong</p>
        )}
      </p>
      <button
        className="ml-[9vw] mr-[9vw] w-[220px] pr-[20px] pl-[20px] h-[40px] bg-[#EEEEEE] outline-none rounded-[8px]   mb-[200px] cursor-pointer"
        onClick={onClick}
      >
        Next
      </button>
    </div>
  );
};

export default ReadReview;
