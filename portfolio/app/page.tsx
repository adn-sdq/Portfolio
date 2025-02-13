import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="absolute top-[15rem] right-[0%] md:w-[43%] text-white">
          <p className="text-xs md:text-[1.125rem] tracking-[-0.01em] md:leading-[1.5rem] text-justify">
            I am a person who seeks deeper meaning, always curious and reasoning
            with logic while embracing organization and minimalism. Yet, some
            thoughts are best expressed beyond words—through photography and
            poetry, where emotions take shape and interpretation becomes
            personal.
          </p>
        </div>
        <div className="absolute top-[36rem] text-white">
          <div className="flex flex-col items-end md:flex-row justify-between">
            <div className="space-y-3">
              <span className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
                About
              </span>
              <p className="text-xs md:text-[1.125rem] md:w-[52%] tracking-[-0.01em] md:leading-[1.5rem] text-justify">
                A digital designer and developer, originally from India and
                raised in Saudi Arabia, specializing in visual interface design
                and development. Inspired by minimal art direction, web
                development, branding, and motion design. With a keen eye for
                storytelling, visual rhythm, and the harmony of elements,
                crafting seamless and refined experiences.
              </p>
            </div>
            <Image
              src="/image-1.png"
              alt="Adnan Memos"
              className="right-[2%]"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </>
  );
}
