import React from 'react';

const Flag2 = () => {
  return (
    <div className='bg-gray-900'>

    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-3xl text-center p-8 md:p-16 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Mission 2: Under the Radar
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          The operatives have intercepted a series of encrypted communications from the Syndicate. 
          Your task is to decode the hidden message to uncover the next clue in your mission.
        </p>
        <p className="text-md md:text-lg text-gray-400 italic mb-10">
          Hint: "The message is scrambled, but not impossible to decipher."
        </p>
        <div className="bg-gray-700 p-6 rounded-lg text-left">
          <p className="text-md md:text-lg text-gray-300 mb-4">
            Communication Log:
          </p>
          <div className="bg-gray-800 p-4 rounded-lg text-gray-300 font-mono text-sm md:text-md whitespace-pre-wrap">
            2024-08-12 14:05:23: Received message from Syndicate operative.<br />
            2024-08-12 14:06:07: <strong>U2N5YmVyLXNlY3VyaXR5LXBsYXRmb3JtLXNlY3JldA==</strong><br />
            2024-08-12 14:08:45: Message logged and stored for further analysis.<br />
            2024-08-12 14:10:17: Decoding required to proceed.
          </div>
        </div>
      </div>
    </div>
      <a href="page3" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 md:px-10 lg:px-12 rounded-full shadow-lg transition transform hover:scale-105">
          Next Flag
        </a>
    </div>
  );
}

export default Flag2;
