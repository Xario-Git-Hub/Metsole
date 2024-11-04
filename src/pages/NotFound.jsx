import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">The page you are looking for could not be found.</p>
      <Link to="/" className="text-white hover:text-gray-300">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
