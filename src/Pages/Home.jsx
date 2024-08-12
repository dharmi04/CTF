import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 flex items-center justify-center">
      <div className="text-center p-6 md:p-12 lg:p-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-6">
          Welcome to the Heist of the Century!
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white font-light mb-10 max-w-2xl mx-auto">
          Gear up, operative! The Syndicate is planning a massive heist, and only you can stop them. 
          Ready to start your adventure and save the world? Let's dive in!
        </p>
        <a href="/ZmxhZ3sxbjdyMWM0NzNfNGxsX3RoM19kuyer67i/page1" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 md:px-10 lg:px-12 rounded-full shadow-lg transition transform hover:scale-105">
          Start Your Adventure
        </a>
      </div>
    </div>
  );
}

export default Home;
