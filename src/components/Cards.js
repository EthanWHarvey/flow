import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white'
            src={Single}
            alt='/'
          />
          <h2 className='text-2xl font-bold text-center py-8'>Standard Plan</h2>
          <p className='text-center text-4xl font-bold'>$85 /mo</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>Real time order flow</p>
            <p className='py-2 border-b mx-8'>Advanced filters</p>
            <p className='py-2 border-b mx-8'>Unusual volume data</p>
          </div>
          <button className='bg-[#63D1FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Subscribe
          </button>
        </div>
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-transparent'
            src={Double}
            alt='/'
          />
          <h2 className='text-2xl font-bold text-center py-8'>
            Professional Plan
          </h2>
          <p className='text-center text-4xl font-bold'>$99 /mo</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>All standard features</p>
            <p className='py-2 border-b mx-8'>Custom wathclist builder</p>
            <p className='py-2 border-b mx-8'>Dark pool prints / levels </p>
          </div>
          <button className='bg-black text-[#63D1FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Trial
          </button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img
            className='w-20 mx-auto mt-[-3rem] bg-white'
            src={Triple}
            alt='/'
          />
          <h2 className='text-2xl font-bold text-center py-8'>
            Pro Annual Plan
          </h2>
          <p className='text-center text-4xl font-bold'>$75 /mo</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 text-[#63D1FF]'> Paid upfront: $900 (save 20%)</p>
            
          </div>
          <button className='bg-[#63D1FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
