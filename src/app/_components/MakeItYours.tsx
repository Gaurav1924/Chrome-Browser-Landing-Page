import React from 'react';
import Image from "next/image";

const MakeItYours: React.FC = () => {
  return (
    <div className="bg-white py-10 lg:py-20 px-6 lg:px-20 text-center">
      <h2 className="text-2xl lg:text-6xl font-bold text-gray-900 mb-6">
        Make it <span className="inline-block mb-2 rounded-xl p-2 bg-[#FCE8E6] text-red-500"><Image src="/yours.svg" width={30} height={30} alt="Yours Icon" className="inline-block w-8 h-8" /> yours</span><  br/> and take it with you
      </h2>
      <div className="flex justify-center">
        <Image src="/theme-ui-1.webp" layout="responsive" width={800} height={800} alt="Delicate Arch" className="rounded-lg shadow-lg max-w-full h-auto" />
      </div>
    </div>
  );
};

export default MakeItYours;
