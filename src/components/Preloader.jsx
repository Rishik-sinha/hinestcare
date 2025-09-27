import React, { useState, useEffect } from 'react';

// --- Icon components remain the same ---
const HomeIcon = () => (
    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);
const SofaIcon = () => (
    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-8-8v8m12-4h-2.522a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V12a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25h.522z"></path></svg>
);
const BroomIcon = () => (
    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.586 3.936a2.25 2.25 0 013.182 0l7.071 7.071a2.25 2.25 0 010 3.182L14.414 18.25a2.25 2.25 0 01-3.182 0L4.16 11.179a2.25 2.25 0 010-3.182l1.426-1.427zM6 21v-2m4-4-1 1"></path></svg>
);


const Preloader = ({ onFinished }) => {
  const icons = [<HomeIcon />, <SofaIcon />, <BroomIcon />];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Slower: Cycle icons every 800ms instead of 700ms for a more relaxed feel
  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 800);
    return () => clearInterval(iconInterval);
  }, [icons.length]);

  // Slower: Animate progress every 30ms instead of 20ms
  // This increases the total load time from ~2 seconds to ~3 seconds
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onFinished, 400); // Slightly longer pause after finishing
          return 100;
        }
        return prev + 1;
      });
    }, 30); 

    return () => clearInterval(progressInterval);
  }, [onFinished]);


  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative w-16 h-16 mb-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIconIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {icon}
          </div>
        ))}
      </div>
      
      <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        {/* Smoother: Using 'ease-out' makes the animation decelerate naturally */}
        <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-200 ease-out" 
            style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;