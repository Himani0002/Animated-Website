import React from 'react';

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className='card relative w-full rounded-xl bg-[#004D43] h-full flex items-center px-32 gap-5 justify-center'>
          <img
            className='w-32'
            src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'
            alt='Logo'
          />
          <button
            className='absolute left-10 bottom-10 px-4 py-2 border-2 border-[#CDEA68] text-[#CDEA68] rounded-full transition'
          >
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card  relative  flex items-center justify-center w-1/2 rounded-xl bg-[#212121] h-full'>
          <img
            className='w-32'
            src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'
            alt='Logo'
          />
          <button
            className='absolute left-10 bottom-10 py-2 px-7 text-[#fff] rounded-full transition uppercase'
          >
            Rating 5.0 on clutch
          </button>
        </div>
        <div className='card relative  flex items-center justify-center  w-1/2 rounded-xl bg-[#212121] h-full'>
          <img
            className='w-32'
            src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'
            alt='Logo'
          />
          <button
            className='absolute left-10 bottom-10 py-1 text-[#fff] rounded-full transition uppercase'
          >
            Business Bootcamp ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
