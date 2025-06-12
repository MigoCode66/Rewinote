import Image from 'next/image';
import React from 'react';

const SignUpCard = () => {
  return (
    <div className="flex-1/2 p-[1vh] flex justify-center items-center h-screen relative text-[0.92rem] font-medium  gap-[8px] flex-col max-sm:hidden">
      <div className="absolute w-full h-[98vh] rounded-[44px] overflow-hidden left-[1vh] z-[-1]">
        <Image
          src={'/bg.png'}
          alt=""
          layout="fill"
          className=" h-full w-full absolute object-cover"
        />
      </div>
      <p>Rewinote</p>
      <h2 className="text-[32px]">Get started with Us</h2>
      <p className="text-[#979797] w-[280px] text-center">
        Complete these easy steps to register your account
      </p>
      <ul className="flex flex-col gap-[13px] mb-[90px]">
        <li className="w-[298px] bg-[#ffffff] h-[54px] rounded-[8px] flex items-center pl-[12px] pr-[20px] gap-[8px] shadow-xl backdrop-blur-[3px]">
          <p className="w-[24px] h-[24px] text-[#ffffff] rounded-[10px] bg-[#000000] text-center shadow-xl">
            1
          </p>
          <p className="">Sign up your account</p>
        </li>
        <li className="w-[298px] bg-[#ffffff22] h-[54px] rounded-[8px] flex items-center pl-[12px] pr-[20px] gap-[8px] shadow-xl  backdrop-blur-[3px]">
          <p className="w-[24px] text-[#ffffff] h-[24px] rounded-[10px] bg-[#00000043] text-center shadow-xl">
            2
          </p>
          <p className="text-[#000000]">Customize your expirence</p>
        </li>
        <li className="w-[298px] bg-[#ffffff22] text-[#ffffff] h-[54px] rounded-[8px] flex items-center pl-[12px] pr-[20px] gap-[8px] shadow-xl backdrop-blur-[3px]">
          <p className="w-[24px] h-[24px] rounded-[10px] bg-[#00000043] text-center shadow-xl">
            3
          </p>
          <p className="text-[#000000]">choose a prazeplan plan</p>
        </li>
      </ul>
    </div>
  );
};

export default SignUpCard;
