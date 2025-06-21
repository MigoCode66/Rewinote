'use client';

import { useContext, useEffect, useRef } from 'react';
import { noteContext } from '../lib/noteContext';

const Rewiew = () => {
  const [notes, setNotes] = useContext(noteContext);
  const selectRef = useRef<HTMLSelectElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onSelect = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    if (buttonRef.current) {
      if (selectRef.current?.value !== 'none') {
        buttonRef.current.style.opacity = '1';
        buttonRef.current.style.cursor = 'pointer';
        buttonRef.current.disabled = true
      } else {
        buttonRef.current.style.opacity = '.7';
        buttonRef.current.style.cursor = '';
        buttonRef.current.disabled = false
      }
    }
  };

  return (
    <div className="w-[calc(100vw-270px)] h-screen flex flex-col gap-[20px]">
      <h1 className="text-[2.5rem] placeholder:text-[#D9D9D9] mt-[125px] ml-[9vw]">
        Rewiew your notes
      </h1>
      <p className="pl-[9vw] pr-[9vw] outline-none text-[1.1rem] resize-none leading-[150%] tracking-normal">
        Use ai to rewiew your notes with this fast and efficient way.
      </p>
      <div className="flex flex-col gap-[4px]">
        <p className="pl-[9vw] pr-[9vw] outline-none text-[1.1rem] resize-none leading-[150%] tracking-normal">
          Select Note
        </p>
        <select
          onChange={onSelect}
          ref={selectRef}
          name="notes"
          id=""
          className="ml-[9vw] mr-[9vw] w-[220px] pr-[20px] pl-[20px] h-[40px] bg-[#EEEEEE] outline-none rounded-[8px]"
        >
          <option value="none">None note selected</option>
          {Object.entries(notes.notes).map((obj, key) => {
            return (
              <option key={key} value={obj[0]}>
                {obj[1].title}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className="ml-[9vw] mr-[9vw] w-[220px] pr-[20px] pl-[20px] h-[40px] bg-[#EEEEEE] outline-none rounded-[8px]  opacity-70 "
        ref={buttonRef}
      >
        Start rewiew
      </button>
    </div>
  );
};

export default Rewiew;
