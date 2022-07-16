import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#63D1FF] font-bold p-2'>
          MODERN OPTIONS FLOW PLATFORM
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Empower the Retail Trader.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, unusual flow for
          </p>
          <div className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
          <TypeWriterEffect
            startDelay={2000}
            cursorColor='gray'
            multiText={["TSLA", "SPY", "APPL", "BTC", "you."]}
            multiTextDelay={1500}
            typeSpeed={150}
          />
          </div>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Uncover unusual options activity and follow the smart money in real time.
        </p>
        <button className='bg-[#63D1FF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-sky-500'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
