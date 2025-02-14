'use client';
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function MagneticLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let offsetX = 0;
    let offsetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      offsetX = e.clientX - (rect.left + rect.width / 2);
      offsetY = e.clientY - (rect.top + rect.height / 2);
      // Request an animation frame for smooth updating
      animationFrameId = requestAnimationFrame(updateTransform);
    };

    const updateTransform = () => {
      if (logoRef.current) {
        // Reduced the multiplier to 0.3 for an even more subtle sticky effect
        logoRef.current.style.transform = `translate(${offsetX * 0.3}px, ${offsetY * 0.3}px)`;
        // Transition remains for smoother effect
        logoRef.current.style.transition = "transform 0.3s ease-out";
      }
    };

    const handleMouseLeave = () => {
      offsetX = 0;
      offsetY = 0;
      animationFrameId = requestAnimationFrame(updateTransform);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[200px] h-[200px]">
      {/* Outer SVG logo layer updated smoothly via ref */}
      <div ref={logoRef} className="absolute inset-0">
        <Image 
          src="/Logo.svg" 
          alt="Logo" 
          fill 
          className="object-contain" 
        />
      </div>
    </div>
  );
}