import React from 'react';
import Image from "next/image"
const ChromeUpdates = () => {
    return (
        <div className="max-w-6xl mx-auto text-center py-10 px-5 font-sans bg-white">
            <h1 className="text-6xl mb-10 font-bold mb-2">
                Discover the latest 
            </h1>
            <h1 className='text-5xl mb-10 font-bold mb-20 flex items-center justify-center'><span className="px-2 mr-2 inline-block mt-4 font-medium text-center text-blue-700 bg-[#E8F0FE] rounded-full inline-flex"><Image className="w-14 h-14" src="/updates.svg" alt='updates' height={20} width={20} />updates</span> from Chrome</h1>
            <div className="rounded-xl flex justify-center gap-6 max-w-7xl mx-auto">
                <div className="h-[600px] bg-[#E8F0FE] rounded-lg p-8 flex-1 shadow-lg space-y-8">
                <h2 className="text-lg text-bold text-left">UPDATES </h2>
                    <h2 className="text-left text-5xl font-bold">Automatic <br />updates</h2>
                    <p className="text-left text-lg">
                        There's a new Chrome release every few weeks, making it easy to have the newest features and a faster, safer web browser.
                    </p>
                    <p className='text-left text-lg'><a href="#" className=" text-blue-500 text-lg font-semibold">Learn about automatic updates</a></p>
                </div>
                <div className="rounded-xl relative h-[600px] bg-[#FEF7E0] rounded-lg p-8 flex-1 shadow-lg space-y-8">
                <h2 className="text-lg text-bold text-left">LATEST </h2>
                    <h2 className="text-left text-5xl font-bold">New from Chrome</h2>
                    <p className="text-lg text-left">
                        Chrome regularly updates with tools and features that make it faster and easier to use.
                    </p>
                    <p className='text-lg text-left'><a href="#" className="text-blue-500 text-lg font-semibold">Learn what's new on Chrome</a></p>
                    <div className="">
                    <Image className='absolute right-0 bottom-10' src="/Chrome-Logo.png" 
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