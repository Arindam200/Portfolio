"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

interface Position {
  x: number;
  y: number;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top - 10, // 10px above the cursor
        });
      }
    };

    if (isVisible) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  return (
    <span
      className="relative inline"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      ref={tooltipRef}
    >
      {children}
      {isVisible ? (
        <span
          className="absolute z-10 w-64 rounded border border-neutral-200 bg-neutral-50 p-2 text-sm leading-4 text-wrap text-neutral-900 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -100%)",
          }}
        >
          {text}
        </span>
      ) : null}
    </span>
  );
};

export default Tooltip;
