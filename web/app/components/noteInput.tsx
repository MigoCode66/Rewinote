'use client';
import React, { KeyboardEventHandler, useEffect, useRef } from 'react';

const NoteInput = () => {
  const textbox = useRef<HTMLTextAreaElement>(null);
  function adjustHeight() {
    if (textbox.current !== null) {
      textbox.current.style.height = 'auto';
      textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }
  }

  useEffect(() => {
    adjustHeight();
    addEventListener('resize', adjustHeight);
  }, []);
  return (
    <div className="w-[calc(100vw-270px)] min-h-screen">
      <input
        type="text"
        placeholder="New note"
        className="text-[2.5rem] placeholder:text-[#D9D9D9] outline-none mt-[125px] ml-[9vw]"
      />
      <textarea
        onInput={adjustHeight}
        ref={textbox}
        name=""
        id=""
        className="w-[100%] pl-[9vw] pr-[9vw] pt-[30px] outline-none text-[1rem] resize-none leading-[150%] tracking-normal"
      ></textarea>
      <div className="h-[250px] w-full"></div>
    </div>
  );
};

export default NoteInput;
