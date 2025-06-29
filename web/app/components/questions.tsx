'use client';

import React, { useContext, useEffect, useState } from 'react';
import { createResponse } from '../lib/openai';
import { noteContext } from '../lib/noteContext';

const Questions = ({
  Display,
}: {
  Display: [
    'select' | 'readNotes' | 'anserQuestions',
    React.Dispatch<
      React.SetStateAction<'select' | 'readNotes' | 'anserQuestions'>
    >
  ];
}) => {
  const [display, setDisplay] = Display;
  const [question, setQuestion] = useState<any[]>([]);
  const [note, setNote] = useContext(noteContext);
  const [currentQuestion, setCurrentQuestion] = useState<number[]>([0, 0]);
  const [hasFetched, setHasFetched] = useState(false);
  useEffect(() => {
    if (hasFetched) return;
    (async () => {
      const questions = await createResponse(
        note.current !== null && note.current !== undefined
          ? note.notes[note.current]?.content || ''
          : ''
      );
      setQuestion(JSON.parse(questions) || []);
      setHasFetched(true);
    })();
  }, [hasFetched]);
  const onClick = () => {
    if (question.length === currentQuestion[0] + 1) setDisplay('select');
    if (currentQuestion[1] === 0) {
      setCurrentQuestion([currentQuestion[0], 1]);
    } else {
      setCurrentQuestion([currentQuestion[0] + 1, 0]);
    }
  };
  return (
    <div className="w-[calc(100vw-270px)] h-screen flex items-center justify-center flex-col gap-[20px]">
      <h1 className="text-[2rem]">Answer Questions</h1>
      {question && question.length > 0 ? (
        <ul>
          <li className="text-[1.2rem] pl-[50px] pr-[50px] text-center">
            {currentQuestion[1] === 0
              ? question[currentQuestion[0]].question
              : question[currentQuestion[0]].answer}
          </li>
        </ul>
      ) : null}
      <button
        className="ml-[9vw] mr-[9vw] w-[220px] pr-[20px] pl-[20px] h-[40px] bg-[#EEEEEE] outline-none rounded-[8px]   mb-[200px] cursor-pointer"
        onClick={onClick}
      >
        Next
      </button>
    </div>
  );
};

export default Questions;
