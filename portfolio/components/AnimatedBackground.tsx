import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 w-screen h-screen bg-background overflow-hidden">
      {/* Oval 1 */}
      <div className="absolute top-[-60vh] left-[-10vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-1 md:w-[70vw] md:h-[70vw]"></div>
      {/* Oval 2 */}
      <div className="absolute top-[35vh] right-[-20vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-2 md:w-[70vw] md:h-[70vw]"></div>
      {/* Oval 3 */}
      <div className="absolute bottom-[-60vh] left-[-25vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-3 md:w-[70vw] md:h-[70vw]"></div>
      {/* Oval 4 */}
      <div className="absolute bottom-[-10vh] right-[-30vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-4 md:w-[70vw] md:h-[70vw]"></div>
    </div>
  );
};

export default AnimatedBackground; 