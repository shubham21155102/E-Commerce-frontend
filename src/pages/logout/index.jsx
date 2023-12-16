import React from 'react';
import Router from 'next/router';
const LogOut = () => {
  const LogOutBtn = () => {
    try {
      localStorage.clear();
      Router.push('/');
    } catch (err) {
      Router.push('/');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">LogOut</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={LogOutBtn}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default LogOut;
