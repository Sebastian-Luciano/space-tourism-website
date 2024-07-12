/* import React from 'react';
import backgroundImage from '../imagen/home/background-home-desktop.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-5xl font-bold mb-4">Space Tourism</h1>
        <p className="text-xl mb-8">Experience the wonders of the cosmos</p>
        <button className="bg-white text-black px-6 py-3 rounded-full text-xl">Explore</button>
      </div>
    </div>
  );
};

export default Home; */

import React from 'react';
import backgroundImage from '../imagen/home/background-home-desktop.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container mx-auto mt-40 pt-40 pb-20 px-40 flex justify-between items-end">
        <div className="text-white max-w-md">
          <h5 className="text-[28px] font-barlow-condensed tracking-[4.72px] text-indigo-200 mb-6">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="text-[150px] font-bellefair leading-none mb-6">SPACE</h1>
          <p className="text-[18px] font-barlow text-indigo-200 leading-8">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        <div>
          <button className="bg-white text-gray-900 w-[272px] h-[272px] rounded-full text-[32px] font-bellefair tracking-[2px] hover:ring-[88px] hover:ring-white hover:ring-opacity-10 transition-all duration-300 ease-in-out">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;