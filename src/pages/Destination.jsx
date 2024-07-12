import React, { useState } from 'react';
import data from '../data/data.json';
import backgroundImage from '../imagen/destination/background-destination-desktop.jpg';

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const destination = data.destinations[currentDestination];

  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container mx-auto px-20 pt-40 pb-20">
        <div className='flex text-4xl font-barlow-condensed indent-px leading-[33.6px] tracking-[4px] mb-20'>
        <p className='pr-4 opacity-25'>01</p><h1 className="mb-8">PICK YOUR DESTINATION</h1>
        </div>
        <div className="flex flex-wrap mr-8">
          <div className="w-full md:w-1/2 mb-8">
            <img src={destination.images.png} alt={destination.name} className="max-w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 px-16">
            <div className="mb-8 font-barlow-condensed">
              {data.destinations.map((dest, index) => (
                <button
                  key={dest.name}
                  onClick={() => setCurrentDestination(index)}
                  className={`mr-4 pb-2 ${index === currentDestination ? 'border-b-2' : ''}`}
                >
                  {dest.name}
                </button>
              ))}
            </div>
            <h2 className="text-6xl font-bellefair mb-4">{destination.name.toLocaleUpperCase()}</h2>
            <p className="mb-8 font-barlow">{destination.description}</p>
            <div className="flex justify-between border-t pt-10">
              <div>
                <p className="text-sm font-barlow-condensed w-[210-5px] h-17px">Avg. Distance</p>
                <p className="text-2xl font-bellefair w-[210-5px] h-32px">{destination.distance.toLocaleUpperCase()}</p>
              </div>
              <div className='pr-10 mr-10'>
                <p className="text-sm font-barlow-condensed w-[210-5px] h-17px">Est. Travel Time</p>
                <p className="text-2xl font-bellefair w-[210-5px] h-32px">{destination.travel.toLocaleUpperCase()}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;