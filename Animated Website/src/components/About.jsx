import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl text-black rounded-tr-3xl px-10'>

      <h1 className='font-serif text-[4vw] leading-[4.5vw] tracking-tight '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

      <div className="w-full flex border-t-[1px] pt-10 mt-20 bodrder-[#CDEA68]">
        <div className='w-1/2 '>
          <h1 className='text-7xl'>Our approach:</h1>
          <button className='flex gap-10 px-10 py-6 items-center bg-zinc-900 mt-10 uppercase  rounded-full text-white'>Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl"><img className=" rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default About
