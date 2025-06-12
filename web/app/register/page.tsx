import React from 'react';
import RegisterForm from '../components/registerForm';
import SignUpCard from '../components/singUpCard';
import SignUpProgressBar from '../components/signUpProgressBar';
const RegisterPage = () => {
  return (
    <div className="flex">
      <SignUpProgressBar />
      <SignUpCard />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
