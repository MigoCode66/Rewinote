'use client';

import React, { useState } from 'react';

const SignUpProgressBar = () => {
  const [progress, setProgress] = useState(70);
  return (
    <nav className="w-[90vw] h-[10px] bg-[#EEEEEE] md:hidden absolute top-[70px] rounded-[8px] left-[5vw]">
      <div
        className=" h-[10px] bg-[#BEADFA]  rounded-[8px]"
        style={{ width: `${progress}%` }}
      ></div>
    </nav>
  );
};

export default SignUpProgressBar;
