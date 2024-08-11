import React from 'react';
// import "theme-ui-1.webp" from '../_components/theme-ui.'
import Image from "next/image" ;
const ExtendExperience: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between px-6 lg:px-16 py-10 lg:py-20 bg-gray-50">
      <div className="w-full lg:w-1/2">
        <Image src="/theme-ui-2.webp" width={400} height={400} alt="Google Chrome with Extensions" className="rounded-lg shadow-lg w-full h-full object-contain" />
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pr-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Extend your <br/>experience</h2>
        <p className="mt-4 text-lg text-gray-700">
          From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store.
        </p>
        <a href="#" className="p-3 rounded-full bg-[#e8f0fe] border-xl mt-6 inline-block text-blue-600 font-bold hover:underline text-lg">
          Explore extensions &rarr;
        </a>
      </div>
    </div>
  );
};

export default ExtendExperience;