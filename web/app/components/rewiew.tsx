'use client';
import { useEffect, useState } from 'react';
import RewiewSelect from './rewiewSelect';
import ReadReview from './readRewiew';

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
      return <div className="">anserQuestions</div>;
  }
};

export default Rewiew;
