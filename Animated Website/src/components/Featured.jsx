import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Featured = () => {
  const [isHoveringFirst, setHoveringFirst] = useState(false); // Hover state for the first card
  const [isHoveringSecond, setHoveringSecond] = useState(false); // Hover state for the second card

  return (
    <div className='w-full py-20'>
      <div className='w-full px-2 border-b-[1px] border-zinc-800 pb-20'>
        <h1 className='text-7xl font-[Noto Sans] tracking-tight'>Featured Projects</h1>
      </div>

      <div className="px-20">
        <div className='cards w-full flex gap-10 mt-10'>

          {/* First Card Container */}
          <div
            onMouseEnter={() => setHoveringFirst(true)}
            onMouseLeave={() => setHoveringFirst(false)}
            className='cardcontainer relative w-1/2 h-[75vh] rounded-lg'
          >
            <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter flex overflow-hidden font-[Noto Sans] -mb-10 text-8xl'>
              {"FYDE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringFirst ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: "easeInOut", delay: index * 0.1, duration: 0.5 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-lg overflow-hidden'>
              <img className="w-full h-full object-cover" src="img/cs-1.png" alt="Project FYDE" />
            </div>
          </div>

          {/* Second Card Container */}
          <div
            onMouseEnter={() => setHoveringSecond(true)}
            onMouseLeave={() => setHoveringSecond(false)}
            className='cardcontainer relative w-1/2 h-[75vh] rounded-lg'
          >
            <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter flex overflow-hidden font-[Noto Sans] -mb-10 text-8xl'>
              {"VISE".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringSecond ? { y: "0%" } : { y: "100%" }}
                  transition={{ ease: "easeInOut", delay: index * 0.1, duration: 0.5 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-lg overflow-hidden'>
              <img className="w-full h-full object-cover" src="img/cs-2.png" alt="Project VISE" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
