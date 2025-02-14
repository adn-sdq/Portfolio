"use client";

import React, { useEffect, useRef } from "react";
import "../app/globals.css";

const CustomCursor: React.FC = () => {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let bigBallX = 0;
    let bigBallY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX/clientY to avoid scroll offsets
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move small ball instantly; subtract 4 to center the 8px ball
      if (smallBallRef.current) {
        smallBallRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animateBigBall = () => {
      // Smoothly interpolate the big ball's position
      bigBallX += (mouseX - bigBallX) * 0.1;
      bigBallY += (mouseY - bigBallY) * 0.1;

      if (bigBallRef.current) {
        const scale = bigBallRef.current.classList.contains("scale-up") ? 1.5 : 1;
        // Big ball is 60px, so subtract 30 to center it
        bigBallRef.current.style.transform = `translate(${bigBallX - 30}px, ${bigBallY - 30}px) scale(${scale})`;
      }

      requestAnimationFrame(animateBigBall);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateBigBall();

    const hoverables = document.querySelectorAll(".hoverable");
    hoverables.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        if (bigBallRef.current) bigBallRef.current.classList.add("scale-up");
      });
      element.addEventListener("mouseleave", () => {
        if (bigBallRef.current) bigBallRef.current.classList.remove("scale-up");
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverables.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="cursor">
      <div ref={bigBallRef} className="cursor__ball cursor__ball--big">
        <svg viewBox="0 0 60 60" width="60" height="60">
          <circle cx="30" cy="30" r="28" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
        <svg viewBox="0 0 8 8" width="8" height="8">
          <circle cx="4" cy="4" r="3" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;