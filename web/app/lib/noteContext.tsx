'use client';

import {
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useState,
} from 'react';

export interface note {
    title: string | null;
    content: string | null;
}

export interface notesState {
  current: string | null;
  notes: {
    [id: string]: note;
  };
}

export const noteContext = createContext<
  [notesState, React.Dispatch<SetStateAction<notesState>>]
>([
  {
    current: null,
    notes: {},
  },
  () => {},
]);

const NoteContextProvider = ({ children }: { children: ReactNode }) => {
  const [note, setNote] = useState<notesState>({
    current: null,
    notes: {},
  });

  return (
    <noteContext.Provider value={[note, setNote]}>
      {children}
    </noteContext.Provider>
  );
};

export default NoteContextProvider;
