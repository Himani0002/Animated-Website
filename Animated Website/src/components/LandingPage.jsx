import React, { useEffect, useRef } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll'; // Import LocomotiveScroll

export const LandingPage = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize locomotive scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      // Clean up the locomotive scroll on unmount
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="overflow-hidden"> {/* Wrap with scroll container */}
      <div data-scroll data-scroll-section data-scroll-speed="-0.3" className=" pt-1">
        <div className="textstructure mt-40 px-20">
          {['We Create', 'Eye Opening', 'Presentations'].map((item, index) => (
            <div key={index} className="masker font-[Noto Sans]">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '8vw' }}
                    transition={{ duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative"
                  >
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src="./img/content-image01.jpg"
                      alt="Content Image"
                    />
                  </motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase leading-tight text-[6vw] tracking-tighter font-bold flex items-center h-full">
                  {item}
                </h1>
              </div>
            </div>
          ))}

          <div className="border-t-[1px] border-zinc-100 mt-32 flex justify-between items-center py-5">
            {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
              <p key={index} className="text-md font-light tracking-tight leading-none">
                {item}
              </p>
            ))}

            <div className="start flex items-center gap-5">
              <div className="px-4 py-2 border-[1px] font-light text-md uppercase border-zinc-400 rounded-full">
                start the project
              </div>
              <div className="w-10 h-10 rounded flex items-center justify-center border-[1px] border-zinc-400">
                <span className="rotate-[45deg]">
                  <FaLongArrowAltUp size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
