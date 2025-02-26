"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import Image from "next/image";

interface FadeContentProps {
  children?: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
}

const FadeContent: React.FC<FadeContentProps> = ({
  blur = true,
  duration = 1500,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element);
          setTimeout(() => {
            setInView(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={`${className} flex justify-center items-center`}
      style={{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
      }}
    >
      <div className="relative flex justify-center items-center w-[270px] h-[180px] sm:w-[200px] sm:h-[150px]  md:w-[270px] md:h-[180px] lg:w-[350px] lg:h-[210px]">
        <Image
          src="/image-1.png"
          alt="Adnan Memos"
          width={350}
          height={210}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default FadeContent;
