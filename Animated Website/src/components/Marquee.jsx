import React from 'react';
import { motion } from 'framer-motion'; // Use named import for motion

const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-900">
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden gap-10 flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }} // Corrected from `initaial` to `initial`
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none uppercase font-[Noto Sans] font-semibold pt-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }} // Corrected from `initaial` to `initial`
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none uppercase font-[Noto Sans] font-semibold pt-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }} // Corrected from `initaial` to `initial`
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none uppercase font-[Noto Sans] font-semibold pt-10"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
