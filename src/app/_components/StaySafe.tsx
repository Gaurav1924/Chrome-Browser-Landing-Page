import React from 'react';
import Image from 'next/image';

const StaySafe: React.FC = () => {
  return (
    <div className="bg-white py-10 lg:py-20 px-6 lg:px-20 max-w-[70%] md:max-w-full mx-auto">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-20">
        Stay <span className="text-center text-2xl md:text-4xl text-blue-700 inline-block mb-2 rounded-full space-x-1 px-2 pr-6 bg-[#E8F0FE]">
          <Image src="/staySafe.svg" width={70} height={70} alt="Yours Icon" className="inline-block w-8 md:w-24" />
          safe
        </span><br /> while you browse
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="relative h-[500px] bg-[#1A73E8] p-12 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-12">Use strong password on every site.</h3>
          <div className="flex items-center justify-center">
            <Image src="/save-password-2x.webp" alt="Use strong passwords" width={400} height={400} className="w-full" />
          </div>
          <div className='absolute right-10 bottom-4 rounded-full md:rounded-full w-8 h-8 md:w-16 text-[20px] md:w-16 md:h-16 bg-white flex-end align-center md:text-[40px] justify-center text-center text-blue-500'>+</div>
        </div>
        <div className="relative bg-[#E8F0FE] p-12 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Check your safety level in real time with just one click.</h3>
          <div className="flex items-center justify-center">
          </div>
          <div className='absolute right-10 bottom-10 rounded-full md:rounded-full w-8 h-8 md:w-16 text-[20px] md:w-16 md:h-16 bg-blue-500 flex-end align-center md:text-[40px] justify-center text-center text-white'>+</div>
        </div>
        <div className="relative bg-white p-12 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Browse with the confidence that you&apos;re staying safer online.</h3>
          <div className='absolute right-10 bottom-10 rounded-full md:rounded-full w-8 h-8 md:w-16 text-[20px] md:w-16 md:h-16 bg-blue-500 flex-end align-center md:text-[40px] justify-center text-center text-white'>+</div>
        </div>
        <div className="relative bg-[#1A73E8] p-12 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Keep your privacy under your control with easy-to-use settings.</h3>
          <div className="flex items-center justify-center">
            <Image src="/google-safety-2x.webp" width={400} height={400} alt="Keep privacy" className="w-1/2 lg:w-full" />
          </div>
          <div className='absolute right-10 bottom-10 rounded-full md:rounded-full w-8 h-8 md:w-16 text-[20px] md:w-16 md:h-16 bg-white flex-end align-center md:text-[40px] justify-center text-center text-blue-500'>+</div>
        </div>
      </div>
    </div>
  );
};

export default StaySafe;
