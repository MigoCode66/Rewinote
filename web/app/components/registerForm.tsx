'use client';
import React from 'react';

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1/2 flex justify-center  items-center ">
      <form
        onSubmit={handleSubmit}
        className="w-[334px] flex justify-center items-center flex-col h-screen gap-[20px] text-[0.92rem] font-medium"
      >
        <div className="flex flex-col gap-[8px] items-center ">
          <h1 className="text-[24px]">Sing Up Account</h1>
          <p className="text-[#979797]">
            Enter your personal data to create your acount
          </p>
        </div>

        <div
          className="flex 
         gap-[22px] "
        >
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="w-[155px] h-[40px] placeholder:text-[#979797] outline-none rounded-[8px] bg-[#EEEEEE] pl-[20px] pr-[20px]"
              placeholder="eg. John"
            />
          </div>
          <div className="flex flex-col gap-[8px] ">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              className="w-[155px] h-[40px] placeholder:text-[#979797] outline-none rounded-[8px] bg-[#EEEEEE] pl-[20px] pr-[20px]"
              placeholder="eg. Francisco"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-[100%]">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className=" h-[40px] placeholder:text-[#979797] outline-none rounded-[8px] bg-[#EEEEEE] pl-[20px] pr-[20px]"
            placeholder="eg. Johnfancisco@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-[8px] w-[100%]">
          <label htmlFor="">Password</label>
          <input
            type="text"
            className=" h-[40px] placeholder:text-[#979797] outline-none rounded-[8px] bg-[#EEEEEE] pl-[20px] pr-[20px]"
            placeholder="Enter your password"
          />
          <p className="text-[0.8rem] text-[#979797]">
            Password must be at least 8 charaters long
          </p>
        </div>
        <button className="p-[10px] bg-black text-[#ffffff] rounded-[8px] w-[100%] cursor-pointer">
          Sign Up
        </button>
        <p className="text-[0.8rem] text-[#979797] flex gap-[0.3rem] cursor-pointer">
          Already have an account? <b className="text-[#000000]">Log in</b>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
