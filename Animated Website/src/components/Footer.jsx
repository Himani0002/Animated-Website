import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-zinc-900 py-20 px-10 md:px-20 flex flex-wrap text-white'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-between'>
        <div className='mb-10'>
          <h1 className='text-[8vw] md:text-[6vw] uppercase font-bold'>Eye-</h1>
          <h1 className='text-[8vw] md:text-[6vw] uppercase font-bold'>Opening</h1>
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-4"
          >
            {/* SVG Path Data */}
          </svg>
        </div>

      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex flex-col space-y-10'>
        {/* Navigation Links */}
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold uppercase mb-3'>Navigation</h3>
          <ul className='font-light space-y-2 text-lg'>
            <li className='hover:text-gray-400 cursor-pointer'>Home</li>
            <li className='hover:text-gray-400 cursor-pointer'>Services</li>
            <li className='hover:text-gray-400 cursor-pointer'>Our work</li>
            <li className='hover:text-gray-400 cursor-pointer'>About us</li>
            <li className='hover:text-gray-400 cursor-pointer'>Insights</li>
            <li className='hover:text-gray-400 cursor-pointer'>Contact us</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold uppercase mb-3'>Social Media</h3>
          <ul className='font-light space-y-2 text-lg'>
            <li><a href="#" className='hover:text-gray-400'>Instagram</a></li>
            <li><a href="#" className='hover:text-gray-400'>Behance</a></li>
            <li><a href="#" className='hover:text-gray-400'>Facebook</a></li>
            <li><a href="#" className='hover:text-gray-400'>LinkedIn</a></li>
          </ul>
        </div>

        {/* Location and Contact Information */}
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold uppercase mb-3'>Locations</h3>
          <p className='font-light leading-relaxed'>
            202-1965 W 4th Ave, Vancouver, Canada<br />
            30 Chukarina St, Lviv, Ukraine
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold uppercase mb-3'>Contact</h3>
          <p className='font-light'>E: hello@ochi.design</p>
        </div>

        {/* Legal Terms */}
        <div className='mt-10'>
          <p className='text-sm text-gray-500 border-t border-gray-700 pt-5'>
            © ochi design 2024. <a href="#" className='hover:text-gray-400'>Legal Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
