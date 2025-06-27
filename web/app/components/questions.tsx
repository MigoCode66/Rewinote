import React, { useEffect, useState } from 'react';
import { createResponse } from '../lib/openai';

const Questions = () => {
  const [question, setQuestion] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const questions = await createResponse(
        'The mitochondria is the powerhouse of the cell.'
      );
      setQuestion(JSON.parse(questions) || []);
    })();
  }, []);

  return (
    <div className="w-[calc(100vw-270px)] h-screen flex items-center justify-center flex-col gap-[20px]">
      <h1>Answer Questions</h1>
      {question && question.length > 0 ? (
        <ul>
          {question.map((q: any, index: number) => (
            <li key={index}>{q.question} {q.answer}</li>

          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Questions;
