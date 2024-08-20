import React from 'react';
import Image from "next/image";

const MakeItYours: React.FC = () => {
  return (
    <div className="bg-white py-10 lg:py-20 px-6 lg:px-20 text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Make it <span className="text-3xl md:text-5xl lg:text-6xl inline-block mb-2 rounded-full p-2 md:p-3 bg-[#FCE8E6] text-red-500"><Image src="/yours.svg" width={50} height={50} alt="Yours Icon" className="inline-block w-8 md:w-16 lg:w-24" /> yours</span>and<  br/> take it with you
      </h2>
      <div className="flex justify-center">
        <Image src="/theme-ui-1.webp" layout="responsive" className=" rounded-lg shadow-lg max-w-full mx-auto max-w-[80%] md:max-w-full h-auto" width={800} height={800} alt="Delicate Arch" />
      </div>
    </div>
  );
};

export default MakeItYours;
