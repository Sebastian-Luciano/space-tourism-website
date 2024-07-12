/* import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagen/shared/logo.svg';


export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-950 font-barlow-condensed">
      <img src={logo} alt="Space Tourism Logo" className="h-10" />
      <div className="text-white space-x-4 indent-px leading-[19.2px] tracking-[2px] bg-opacity-5">
        <Link to="/" className="text-white">00 Home</Link>
        <Link to="/destination" className="text-white">01 Destination</Link>
        <Link to="/crew" className="text-white">02 Crew</Link>
        <Link to="/technology" className="text-white">03 Technology</Link>
      </div>
    </nav>
  );
};

 */

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagen/shared/logo.svg';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 absolute w-full z-10">
      <img src={logo} alt="Space Tourism Logo" className="h-12" />
      <div className="bg-white bg-opacity-5 backdrop-blur-md px-24 py-8">
        <div className="flex space-x-12 text-white font-barlow-condensed text-base tracking-[2.7px]">
          <Link to="/" className="hover:border-b-2 pb-2"><span className="font-bold mr-2">00</span> HOME</Link>
          <Link to="/destination" className="hover:border-b-2 pb-2"><span className="font-bold mr-2">01</span> DESTINATION</Link>
          <Link to="/crew" className="hover:border-b-2 pb-2"><span className="font-bold mr-2">02</span> CREW</Link>
          <Link to="/technology" className="hover:border-b-2 pb-2"><span className="font-bold mr-2">03</span> TECHNOLOGY</Link>
        </div>
      </div>
    </nav>
  );
};