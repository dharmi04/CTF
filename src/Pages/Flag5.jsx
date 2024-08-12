import React, { useState } from 'react';

const Flag5 = () => {
  // Define the correct sequence of button clicks
  const correctSequence = [1, 2, 3, 4, 5, 6]; // Correct sequence
  const [userSequence, setUserSequence] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [message, setMessage] = useState('');

  const handleButtonClick = (buttonNumber) => {
    setUserSequence([...userSequence, buttonNumber]);

    // Check if the sequence matches the correct sequence
    if (userSequence.length + 1 === correctSequence.length) {
      if (JSON.stringify([...userSequence, buttonNumber]) === JSON.stringify(correctSequence)) {
        setIsComplete(true);
        setMessage("Yayyy!!! You completed the challenge 🎉🎉🎉\nTask Complete! Check the console for your flag.");

        // Reveal the flag in the console
        const flag = "flag{E4t9K5x2L1n0P3v8RzW6}";
        console.log(flag);
      } else {
        setUserSequence([]);
        setMessage("Incorrect sequence! Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="max-w-2xl text-center p-8 md:p-16 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Mission 5: Hacking a Virtual Safe
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Break into the virtual safe by following the correct sequence of hacking steps. Click the buttons in the correct order to reveal the hidden flag.
        </p>
        <p className="text-md md:text-lg text-gray-400 italic mb-10">
          Hint: "The correct path will lead you to success."
        </p>
        <div className="bg-gray-700 p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-2 gap-4 justify-center">
            <button 
              onClick={() => handleButtonClick(3)} 
              className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Crack Encryption
            </button>
            <button 
              onClick={() => handleButtonClick(4)} 
              className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Access Database
            </button>
            <button 
              onClick={() => handleButtonClick(6)} 
              className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Cover Tracks
            </button>
            <button 
              onClick={() => handleButtonClick(1)} 
              className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Bypass Firewall
            </button>
            <button 
              onClick={() => handleButtonClick(5)} 
              className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Extract Data
            </button>
            <button 
              onClick={() => handleButtonClick(2)} 
              className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Exploit Vulnerability
            </button>
          </div>
          <p className="text-green-400 text-lg mt-6">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flag5;
