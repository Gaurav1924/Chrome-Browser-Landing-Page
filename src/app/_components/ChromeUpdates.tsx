import React from 'react';
import Image from "next/image"
const ChromeUpdates = () => {
    return (
        <div className="max-w-6xl mx-auto text-center py-10 px-5 font-sans bg-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-10 font-bold mb-2">
                Discover the latest 
            </h1>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mb-10 font-bold mb-20 flex items-center justify-center'><span className="px-2 mr-2 inline-block mt-4 font-lg text-center text-blue-700 bg-[#E8F0FE] rounded-full inline-flex"><Image className="w-9 h-9 md:w-14 md:h-14" src="/updates.svg" alt='updates' height={20} width={20} />updates</span>  from Chrome</h1>
            <div className="rounded-xl flex flex-col md:flex-row justify-center gap-6 max-w-7xl mx-auto">
                <div className="h-[600px] bg-[#E8F0FE] rounded-lg p-8 flex-1 shadow-lg space-y-4 md:space-y-8">
                <h2 className="text-[#5f6368] text-sm font-bold text-left">UPDATES </h2>
                    <h2 className="text-left text-3xl md:text-4xl lg:text-5xl  font-bold">Automatic <br />updates</h2>
                    <p className="text-[#5f6368] text-left text-md md:text-lg lg:text-xl">
                        There &apos; s a new Chrome release every few weeks, making it easy to have the newest features and a faster, safer web browser.
                    </p>
                    <p className='text-left text-md md:text-lg'><a href="#" className=" text-blue-500 text-lg font-semibold">Learn about automatic updates</a></p>
                </div>
                <div className="rounded-xl relative h-[600px] bg-[#FEF7E0] rounded-lg p-8 flex-1 shadow-lg space-y-4 md:space-y-8">
                <h2 className="text-[#5f6368] text-sm font-bold text-left">LATEST </h2>
                    <h2 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold">New from Chrome</h2>
                    <p className="text-[#5f6368] text-md md:text-lg lg:text-xl text-left">
                        Chrome regularly updates with tools and features that make it faster and easier to use.
                    </p>
                    <p className='text-md text-left'><a href="#" className="text-blue-500 text-md md:text-lg font-semibold">Learn what &apos; s new on Chrome</a></p>
                    <div className="">
                    <Image className='absolute right-0 bottom-10 w-[100px] md:w-[150px] lg:w-[200px] ' src="/Chrome-Logo.png" 
          alt="Chrome logo"
          width={200}
          height={200}
        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChromeUpdates;