import React from 'react';
import Image from "next/image" ;
const CustomiseChrome: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row lg:justify-between px-6 lg:px-20 py-10 lg:py-20 bg-white">
      <div className="w-full lg:w-1/2">
        <Image src="/autofill.webp" width={400} height={400} alt="Customise Chrome" className="rounded-lg shadow-lg w-full max-w-[70%] md:max-w-[90%] lg:max-w-full mx-auto" />
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:pl-20 max-w-[70%] lg:max-w-full mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Customise your<br/> Chrome</h2>
        <p className="mt-4 text-lg md:text-xl text-[#5f6368]">
          Personalise your web browser <br />with themes, dark mode, and other<br/> options built just for you.
        </p>
        <a href="#" className="mt-6 inline-block text-blue-600 hover:underline text-lg font-medium">
          Explore themes &rarr;
        </a>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-8">Browser across<br/> devices</h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-8">Save Time with autofill</h2>
        <a href="#" className="p-3 rounded-full bg-[#e8f0fe] border-xl mt-6 inline-block text-blue-600 hover:underline text-lg">
          Sign in to get started &rarr;
        </a>
      </div>
    </div>
  );
};

export default CustomiseChrome; 