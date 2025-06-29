'use client';
import { useEffect, useState } from 'react';
import RewiewSelect from './rewiewSelect';
import ReadReview from './readRewiew';
import Questions from './questions';

const Rewiew = () => {
  const [display, setDisplay] = useState<
    'select' | 'readNotes' | 'anserQuestions'
  >('select');

  useEffect(() => {
    setDisplay('select');
  }, []);
  switch (display) {
    case 'select':
      return <RewiewSelect Display={[display, setDisplay]} />;
    case 'readNotes':
      return <ReadReview Display={[display, setDisplay]} />;
    case 'anserQuestions':
      return <Questions Display={[display, setDisplay]} />;
  }
};

export default Rewiew;
