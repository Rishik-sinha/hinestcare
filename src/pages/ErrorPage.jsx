import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <h1 className="text-6xl font-extrabold text-blue-700">Oops!</h1>
      <p className="mt-4 text-xl text-gray-600">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 text-base text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link 
        to="/" 
        className="mt-8 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;