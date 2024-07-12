import React, { useState } from 'react';
import data from '../data/data.json';
import backgroundImage from '../imagen/crew/background-crew-desktop.jpg';

const Crew = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const member = data.crew[currentMember];

  return (
    <div className="min-h-screen bg-cover bg-center text-white" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="container mx-auto px-20 pt-40 pb-20">
      <div className='flex text-4xl font-barlow-condensed indent-px leading-[33.6px] tracking-[4px] mb-20'>
      <p className='pr-4 opacity-25'>02</p><h1 className="mb-8">Meet your crew</h1>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 pr-16 mb-8">
            <h2 className="text-2xl font-bellefair opacity-50 indent-px leading-[33.6px] tracking-[4px]  mb-2">{member.role.toLocaleUpperCase()}</h2>
            <h3 className="text-5xl font-bellefair indent-1 leading-[64.18px] mb-4">{member.name.toLocaleUpperCase()}</h3>
            <p className="font-barlow mb-8">{member.bio}</p>
            <div className="flex">
              {data.crew.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-3 h-3 rounded-full mr-4 ${index === currentMember ? 'bg-white' : 'bg-gray-500'}`}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={member.images.png} alt={member.name} className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;