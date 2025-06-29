"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";
import "@/components/FadeContent";

// Dynamically import heavy client components to improve load concurrency.
const MagneticLogo = dynamic(() => import("@/components/MagneticLogo"), {
  ssr: false,
});
const FadeContent = dynamic(() => import("@/components/FadeContent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative">
      <Navbar />

      {/* Intro text */}
      <section className="absolute top-[15rem] right-0 md:w-[43%] text-white" aria-label="Introduction">
        <p className="text-xs md:text-[1.125rem] tracking-[-0.01em] md:leading-[1.5rem] text-justify">
          I am a person who seeks deeper meaning, always curious and reasoning
          with logic while embracing organization and minimalism. Yet, some
          thoughts are best expressed beyond words—through photography and
          poetry, where emotions take shape and interpretation becomes personal.
        </p>
      </section>

      {/* About and FadeContent Section */}
      <section className="relative sm:top-[60vh] top-[55vh] text-white" aria-label="About section">
        {/* Wrapper for About Section and FadeContent */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end space-y-32 sm:space-y-0 sm:space-x-8">
          {/* About section */}
          <article className="space-y-4 w-full sm:w-[60%]">
            <span className="text-white text-[10px] md:text-[15px] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
              About
            </span>
            <p className="text-xs w-full md:text-[1.125rem] tracking-[-0.01em] md:leading-[1.5rem] text-justify">
              A digital designer and developer, originally from India and raised
              in Saudi Arabia, specializing in visual interface design and
              development. Inspired by minimal art direction, web development,
              branding, and motion design. With a keen eye for storytelling,
              visual rhythm, and the harmony of elements, crafting seamless and
              refined experiences.
            </p>
          </article>

          {/* FadeContent Section */}
          <div className="flex justify-center items-center w-full sm:w-auto">
            <FadeContent />
          </div>
        </div>
      </section>

      {/* Tools and Magnetic Logo section */}
      <section className="relative md:top-[110vh] sm:top-[95vh] top-[80vh]" aria-label="Skills and tools">
        {/* Wrapper for tools and magnetic logo */}
        <div className="flex flex-col sm:flex-row justify-between items-start space-y-32 sm:space-y-0">
          {/* Tools Section */}
          <article className="space-y-4">
            <span className="text-white text-[10px] md:text-[15px] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hoverable">
              Tools
            </span>
            <div className="flex flex-row space-x-10 md:space-x-20 justify-between items-end">
              <div className="flex flex-col text-xs md:text-[1.125rem] tracking-[-0.01em] space-y-1 md:leading-[1.5rem]">
                <div>Next.js</div>
                <div>React</div>
                <div>Tailwind</div>
                <div>Typescript</div>
                <div>Prisma</div>
              </div>
              <div className="flex flex-col text-xs md:text-[1.125rem] tracking-[-0.01em] space-y-1 md:leading-[1.5rem]">
                <div>Supabase</div>
                <div>PostgreSQL</div>
                <div>Docker</div>
                <div>Figma</div>
                <div>Framer</div>
              </div>
              <div className="flex flex-col text-xs md:text-[1.125rem] tracking-[-0.01em] space-y-1 md:leading-[1.5rem]">
                <div>Lightroom</div>
                <div>Illustrator</div>
                <div>Blender</div>
                <div>Photoshop</div>
                <div>Da Vinci</div>
              </div>
            </div>
          </article>

          {/* Magnetic Logo Section */}
          <div className="flex justify-center items-center w-full sm:w-auto ">
            {/* Magnetic logo */}
            <MagneticLogo />
          </div>
        </div>
      </section>

      {/* Footer / Contact section */}
      <footer className="relative md:top-[170vh] space-y-4 top-[100vh]" role="contentinfo">
        <p className="text-[0.7rem] md:text-[1.125rem] md:w-[55%] tracking-[-0.01em] md:leading-[1.5rem]">
          Multi-Disciplinary Interactive Developer & Designer
          <br />
          Designing Systems / Crafting Stories — based in RUH | HYD
        </p>
        <div className="relative flex flex-col md:flex-row justify-between pb-9 md:pb-6 space-y-8 md:space-y-0">
          <div className="flex flex-row space-x-1 md:space-x-2">
            <a
              href="https://www.instagram.com/adn.memos/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Adnan's Instagram profile"
              className="text-white text-[0.6rem] md:text-[0.938rem] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Instagram
            </a>
            <a
              href="https://dribbble.com/adn_memos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Adnan's Dribbble profile"
              className="text-white text-[0.6rem] md:text-[0.938rem] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Dribbble
            </a>
            <a
              href="https://www.behance.net/adn-memos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Adnan's Behance profile"
              className="text-white text-[0.6rem] md:text-[0.938rem] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Behance
            </a>
            <a
              href="https://github.com/Adnan-Memos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Adnan's GitHub profile"
              className="text-white text-[0.6rem] md:text-[0.938rem] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/adn-memos/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Adnan's LinkedIn profile"
              className="text-white text-[0.6rem] md:text-[0.938rem] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Linkedin
            </a>
            <a
              href="/Resume-Adnan(15.01.25).pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="View my resume"
              className="text-white text-[0.6rem] md:text-[0.938rem] font-normal select-none py-[0.08rem] px-2 md:px-[0.8rem] md:py-[0.08rem] border border-white tracking-[-0.01em] rounded-[7px] md:rounded-[10px] hover:font-medium hover:bg-white hover:text-[#224faa] hoverable"
            >
              Resume
            </a>
          </div>
          <div className="absolute text-[0.7rem] md:text-[1em] right-0">
            © 2025 Adnan Memos
          </div>
        </div>
      </footer>
    </div>
  );
}
