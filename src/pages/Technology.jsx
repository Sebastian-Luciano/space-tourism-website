import React, { useState } from 'react';
import data from '../data/data.json';
import backgroundImage from '../imagen/technology/background-technology-desktop.jpg';

const Technology = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const tech = data.technology[currentTech];

  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container mx-auto px-20 pt-40 pb-20">
      <div className='flex text-4xl font-barlow-condensed indent-px leading-[33.6px] tracking-[4px] mb-20'>
      <p className='pr-4 opacity-25'>03</p><h1 className="mb-8">Space launch 101</h1>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 pr-8 mb-8 flex items-center">
            <div className="mr-8">
              {data.technology.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTech(index)}
                  className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center border ${
                    index === currentTech ? 'bg-white text-black' : 'text-white'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div>
              <h2 className="text- font-bellefair opacity-50 indent-px leading-[33.6px] tracking-[4px] mb-2">THE TERMINOLOGY...</h2>
              <h3 className="text-5xl font-bellefair mb-4">{tech.name.toLocaleUpperCase()}</h3>
              <p className='font-barlow'>{tech.description}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={tech.images.portrait} alt={tech.name} className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;