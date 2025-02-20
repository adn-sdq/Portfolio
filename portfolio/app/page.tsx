"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "@/app/globals.css";

// Dynamically import heavy client components to improve load concurrency.
const MagneticLogo = dynamic(() => import("@/components/MagneticLogo"), {
  ssr: false,
});
const FadeContent = dynamic(() => import("../components/FadeContent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative">
      <Navbar />

      {/* Intro text */}
      <section className="absolute top-[15rem] right-0 md:w-[43%] text-white">
        <p className="text-xs md:text-[1.125rem] tracking-[-0.01em] md:leading-[1.5rem] text-justify">
          I am a person who seeks deeper meaning, always curious and reasoning
          with logic while embracing organization and minimalism. Yet, some
          thoughts are best expressed beyond words—through photography and
          poetry, where emotions take shape and interpretation becomes personal.
        </p>
      </section>

      {/* About section */}
      <section className="relative top-[64vh] text-white">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div className="space-y-4">
            <span className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
              About
            </span>
            <p className="text-xs md:text-[1.125rem] md:w-[60%] tracking-[-0.01em] md:leading-[1.5rem] text-justify">
              A digital designer and developer, originally from India and raised
              in Saudi Arabia, specializing in visual interface design and
              development. Inspired by minimal art direction, web development,
              branding, and motion design. With a keen eye for storytelling,
              visual rhythm, and the harmony of elements, crafting seamless and
              refined experiences.
            </p>
          </div>
          <FadeContent
            blur
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <div
              className="relative"
              style={{ width: "350px", height: "210px" }}
            >
              <Image
                src="/image-1.png"
                alt="Adnan Memos"
                width={350}
                height={210}
                className="object-contain"
              />
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Tools list */}
      <section className="space-y-4 absolute top-[70rem]">
        <span className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
          Tools
        </span>
        <div className="flex flex-col md:flex-row space-x-20 justify-between items-end">
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
      </section>

      {/* Magnetic logo */}
      <section className="absolute top-[70rem] right-20">
        <MagneticLogo />
      </section>

      {/* Footer / Contact section */}
      <footer className="relative top-[85rem] space-y-4">
        <p className="text-xs md:text-[1.125rem] md:w-[55%] tracking-[-0.01em] md:leading-[1.5rem]">
          Multi-Disciplinary Interactive Developer & Designer
          <br />
          Designing Systems / Crafting Stories — based in RUH | HYD
        </p>
        <div className="relative flex flex-col md:flex-row justify-between pb-5">
          <div className="flex flex-row space-x-2">
            <a
              href="https://www.instagram.com/adn.memos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Instagram
            </a>
            <a
              href="https://dribbble.com/adn_memos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Dribbble
            </a>
            <a
              href="https://www.behance.net/adn-memos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Behance
            </a>
            <a
              href="https://github.com/Adnan-Memos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/adn-memos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Linkedin
            </a>
            <a
              href="/Resume-Adnan(15.01.25).pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="View my resume"
              className="text-white text-[10px] md:text-[15px] font-normal select-none py-1 px-3 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Resume
            </a>
          </div>
          <div>© 2025 Adnan Memos</div>
        </div>
      </footer>
    </div>
  );
}
