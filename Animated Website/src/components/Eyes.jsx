import React, { useState, useEffect } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.9"
        data-scroll-section // Corrected typo here
        className="relative w-full h-full bg-cover bg-center bg-[url('img/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
          {/* First Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div className="relative w-2/3 h-2/3 rounded-full">
                <div
                  style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-100 animate-eyeball"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Eye */}
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="flex items-center justify-center w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div className="relative w-2/3 h-2/3 rounded-full">
                <div
                  style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-100 animate-eyeball"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
