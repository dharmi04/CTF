import React from 'react';

const Flag1 = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <div className="max-w-3xl text-center p-8 md:p-16 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mission 1: Breaking In
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            The Syndicate's initial planning server is lightly secured, as they believe no one would find it.
            Your first mission is to gain access to this server and retrieve the hidden flag.
          </p>
          <p className="text-md md:text-lg text-gray-400 italic mb-10">
            Hint: "The Syndicate hides in plain sight. Check the code."
          </p>
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-md md:text-lg text-gray-300 mb-4">
              Welcome to the Syndicate's planning server. Everything seems normal, but is it?
            </p>
            {/* The flag is hidden as a comment in the code, but not visible on the page */}
            {/* Hint: Inspect the page source to find the hidden flag */}
          </div>
            
              <p className="text-gray-800 text-lg">your flag is <span className="font-semibold">"flag is{"flag{X7r0b2a1V9u8Zc5k4Qx}"}</span></p>
    
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <a href="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kNHQu/page2" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 md:px-8 lg:px-10 rounded-full shadow-lg transition transform hover:scale-105 text-center max-w-xs w-full">
          Next Flag
        </a>
      </div>

    </div>
  );
}

export default Flag1;
