export default function AnimatedBackground() {
    return (
        <div className="relative w-screen h-screen bg-white overflow-hidden">
        {/* Oval 1 */}
        <div className="absolute top-[-20vh] left-[-4vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-1 md:w-[75vw] md:h-[75vw]"></div>
        {/* Oval 2 */}
        <div className="absolute top-[-30vh] right-[-5vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-2 animation-delay-1500 md:w-[75vw] md:h-[75vw]"></div>
        {/* Oval 3 */}
        <div className="absolute bottom-[-3vh] left-[-3vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-3 animation-delay-4000 md:w-[75vw] md:h-[75vw]"></div>
        {/* Oval 4 */}
        <div className="absolute bottom-[-2vh] right-[-25vw] w-[75vh] h-[75vh] bg-[#224faa] rounded-full filter blur-[150px] animate-blob-4 animation-delay-7500 md:w-[75vw] md:h-[75vw]"></div></div>
    );
  }
  