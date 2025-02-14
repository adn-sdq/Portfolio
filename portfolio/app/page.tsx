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
            <div className="space-y-4">
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
        <div className="space-y-4 absolute top-[64rem]">
          <span className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
            Tools
          </span>
          <div className="flex flex-col md:flex-row space-x-20 justify-between">
            <div className="text-xs md:text-[1.125rem] md:w-[52%] tracking-[-0.01em] md:leading-[1.5rem]">
              Next.js
              <br />
              React
              <br />
              Tailwind
              <br />
              Typescript
              <br />
              Prisma
            </div>
            <div className="text-xs md:text-[1.125rem] md:w-[52%] tracking-[-0.01em] md:leading-[1.5rem]">
              Supabase
              <br />
              PostgreSQL
              <br />
              Docker
              <br />
              Figma
              <br />
              Framer
            </div>
            <div className="text-xs md:text-[1.125rem] md:w-[52%] tracking-[-0.01em] md:leading-[1.5rem]">
              Lightroom
              <br />
              Illustrator
              <br />
              Blender
              <br />
              Photoshop
              <br />
              Da Vinci
            </div>
          </div>
        </div>
        <div className="absolute top-[64rem] right-20">
          <Image src="/logo.svg" alt="Adnan Memos" width={200} height={200} />
        </div>
        <div className="absolute top-[85rem] space-y-4">
          <p className="text-xs md:text-[1.125rem] md:w-[55%] tracking-[-0.01em] md:leading-[1.5rem]">
            Multi-Disciplinary Interactive Developer & Designer<br/>
            Designing Systems / Crafting Stories — based in RUH | HYD
          </p>
          <div className="w-screen flex flex-row justify-between pr-12 pb-5">
            <div className="flex flex-row space-x-2">
              <button className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
                Instagram
              </button>
              <button className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
                Dribbble
              </button>
              <button className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
                Behance
              </button>
              <button className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
                Github
              </button>
              <button className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
                Linkedin
              </button>
              <button className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
                Resume
              </button>
            </div>
            <div className="icons"></div>
            <div>© 2025 Adnan Memos</div>
          </div>
        </div>
      </div>
    </>
  );
}
