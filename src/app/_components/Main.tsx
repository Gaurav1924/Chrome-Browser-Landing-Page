import React from 'react';
import Image from "next/image" ;
const ChromePromo: React.FC = () => {
  return (
    <div className="flex flex-col items-center font-sans p-12 text-gray-900">
      
      {/* Chrome Logo */}
      <div className="mb-5">
        <Image
          src="/Chrome-Logo.png"
          alt="Chrome Logo"
          width={130}
          height={130}
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl font-extrabold text-center leading-tight">
        The browser <br /> built to be yours
      </h1>

      {/* Button Links */}
      <div className="p-2 shadow-lg border-gray-300 rounded-full flex justify-center my-8 space-x-5 text-lg">
        {['Updates', 'Yours', 'Safe', 'Fast', 'By Google'].map((text) => (
          <div
            key={text}
            className="px-5 py-2 cursor-pointer hover:bg-gray-100"
          >
            {text}
          </div>
        ))}
      </div>

      {/* Download Link */}
      <div className="text-base mt-5">
        Need the Chrome installer?{' '}
        <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Download here.
        </a>
      </div>
    </div>
  );
};

export default ChromePromo;
