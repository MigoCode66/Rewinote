'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
  interface formDataTypes {
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<formDataTypes>({
    email: '',
    password: '',
  });
  const router = useRouter();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        router.push('/dashboard');
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="w-[334px] flex justify-center items-center flex-col h-screen gap-[20px] text-[0.92rem] font-medium"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-[8px] items-center ">
          <p>Rewinote</p>
          <h1 className="text-[24px]">Log in in to Account</h1>
          <p className="text-[#979797]">
            Enter your personal data to create your acount
          </p>
        </div>

        <div className="flex flex-col gap-[8px] w-[100%]">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            type="text"
            className=" h-[40px] placeholder:text-[#979797] outline-none rounded-[8px] bg-[#EEEEEE] pl-[20px] pr-[20px]"
            placeholder="eg. Johnfancisco@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-[8px] w-[100%]">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            type="password"
            className=" h-[40px] placeholder:text-[#979797] outline-none rounded-[8px] bg-[#EEEEEE] pl-[20px] pr-[20px]"
            placeholder="Enter your password"
          />
          <p className="text-[0.8rem] text-[#979797]">
            Password must be at least 8 charaters long
          </p>
        </div>
        <button className="p-[10px] bg-black text-[#ffffff] rounded-[8px] w-[100%] cursor-pointer">
          Log in
        </button>
        <Link
          href={'/register'}
          className="text-[0.8rem] text-[#979797] flex gap-[0.3rem] cursor-pointer"
        >
          You do not have an account? <b className="text-[#000000]">Register</b>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
