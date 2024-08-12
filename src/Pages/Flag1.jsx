import React from 'react';

const Flag1 = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
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
          <p className="text-sm md:text-md text-gray-500">
            {/* Hidden HTML Comment with Flag */}
            {/* FLAG: easy-flag-123 */}
          </p>
        </div>

      </div>
      <a href="page2" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 md:px-10 lg:px-12 rounded-full shadow-lg transition transform hover:scale-105">
          Next Flag
        </a>
    </div>
  );
}

export default Flag1;
