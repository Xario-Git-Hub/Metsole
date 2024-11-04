import React from 'react';
import { Link } from 'react-router-dom';

const GeneralErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-600 to-red-400 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 animate-pulse">Oops!</h1>
        <h2 className="text-4xl font-semibold mb-6">Something went wrong</h2>
        <p className="text-lg mb-8">
          We encountered an error while processing your request.
        </p>
        <Link
          to="/"
          className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default GeneralErrorPage;
