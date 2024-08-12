import React, { useState } from 'react';

const Flag4 = () => {
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Simulating SQL injection vulnerability
    const obfuscatedPassword = "admin' OR '1'='1"; // Example payload
    const correctUsername = "admin"; // Hardcoded for demonstration
    const secretFlag = "flag{p9XjZ2w6LmYb1K7vT0eH}";

    if (username === correctUsername && password === obfuscatedPassword) {
      setLoginMessage(`Access granted! ${secretFlag}`);
    } else {
      setLoginMessage('Access denied! Invalid credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center flex-grow p-8">
        <div className="max-w-xl text-center p-8 md:p-16 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mission 4: Compromised Credentials
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            The Syndicate has been using compromised credentials to access high-security vaults.
            Your mission is to manipulate the login page and retrieve the hidden flag.
          </p>
          <p className="text-md md:text-lg text-gray-400 italic mb-10">
            Hint: "Trust no input; the key might just be a clever phrase."
          </p>
          <div className="bg-gray-700 p-6 rounded-lg">
            <form onSubmit={handleLogin} className="flex flex-col items-center">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="mb-4 px-4 py-2 rounded-lg bg-gray-800 text-white w-full"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105"
              >
                Login
              </button>
            </form>
            {loginMessage && (
              <div className="mt-6 text-lg text-yellow-400">
                {loginMessage}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-center mb-8">
        <a
          href="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kNH678oieuyhgvbd/page5"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 md:px-8 lg:px-10 rounded-full shadow-lg transition transform hover:scale-105 text-center max-w-xs"
        >
          Next Flag
        </a>
      </div>
    </div>
  );
}

export default Flag4;
