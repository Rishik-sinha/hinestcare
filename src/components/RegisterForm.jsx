import React from 'react';

const RegisterForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" name="name" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
       <div>
        <label htmlFor="email-reg" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" name="email-reg" id="email-reg" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div>
        <label htmlFor="password-reg" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" name="password-reg" id="password-reg" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800">
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;