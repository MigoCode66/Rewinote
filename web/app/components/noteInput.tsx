'use client';
import React, {
  KeyboardEventHandler,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { noteContext } from '../lib/noteContext';

const NoteInput = () => {
  const textbox = useRef<HTMLTextAreaElement>(null);
  const titeInput = useRef<HTMLInputElement>(null);
  const [notes, setNotes] = useContext(noteContext);

  function adjustHeight() {
    if (textbox.current !== null) {
      textbox.current.style.height = 'auto';
      textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }
  }
  useEffect(() => {
    if (textbox.current) {
      // Use setTimeout to ensure DOM has updated
      setTimeout(adjustHeight, 0);
    }
  }, [notes.current, notes.notes]);

  useEffect(() => {
    if (
      titeInput.current &&
      notes.current !== null &&
      notes.notes[notes.current]
    ) {
      if (notes.notes[notes.current].title === 'New note') {
        titeInput.current.value = '';
      } else {
        titeInput.current.value = notes.notes[notes.current].title || '';
      }
    }
    if (
      textbox.current &&
      notes.current !== null &&
      notes.notes[notes.current]
    ) {
      textbox.current.value = notes.notes[notes.current].content || '';
    }
  }, [notes.current]);

  const onTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (e.target as HTMLInputElement).value !== '' &&
      (e.target as HTMLInputElement).value.trim() === ''
    ) {
      (e.target as HTMLInputElement).value = '';
    }
    const newNoteObj = Object.fromEntries(
      Object.entries(notes.notes).map(([Key, value]) =>
        Key === notes.current
          ? (e.target as HTMLInputElement).value !== ''
            ? [Key, { ...value, title: (e.target as HTMLInputElement).value }]
            : [Key, { ...value, title: 'New note' }]
          : [Key, value]
      )
    );
    setNotes({ current: notes.current, notes: { ...newNoteObj } });
  };

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNoteObj = Object.fromEntries(
      Object.entries(notes.notes).map(([Key, value]) =>
        Key === notes.current
          ? [
              Key,
              { ...value, content: (e.target as HTMLTextAreaElement).value },
            ]
          : [Key, value]
      )
    );
    setNotes({ current: notes.current, notes: { ...newNoteObj } });
  };

  return (
    <div className="w-[calc(100vw-270px)] min-h-screen">
      <input
        type="text"
        placeholder="New note"
        className="text-[2.5rem] placeholder:text-[#D9D9D9] outline-none mt-[125px] ml-[9vw]"
        onChange={onTitleInputChange}
        ref={titeInput}
      />
      <textarea
        onChange={adjustHeight}
        onInput={onTextAreaChange}
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
