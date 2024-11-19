"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const MenuClientWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const targetRef = useRef<HTMLElement | null>(null);
  // Set up the target after component mounts
  useEffect(() => {
    targetRef.current = document.documentElement;
  }, []);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Transform scrollYProgress (0-1) into desired animation values
  const x = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3], // scroll progress points
    ["-100%", "-50%", "0%"], // corresponding x positions
  );

  const color = useTransform(
    scrollYProgress,
    [0.1, 0.3],
    ["hsl(var(--destructive-foreground))", "hsl(var(--destructive))"],
  );

  const FontColorClass = useTransform(
    scrollYProgress,
    [0, 0.15],
    ["text-destructive-foreground ", "text-destructive-foreground"],
  );

  return (
    <>
      <div className="hidden md:flex w-1/3 h-screen relative z-0"></div>
      <motion.div
        style={{ color }}
        className={`${FontColorClass} hidden md:flex bg-destructive w-1/3 fixed z-10 border-r border-dashed `}
      >
        <motion.div
          style={{
            x,
          }}
          className={`bg-background h-[100%] w-[100%] absolute z-0`}
        ></motion.div>

        <div className="w-full z-10 overflow-hidden flex flex-col justify-between items-center h-screen">
          {children}
        </div>
      </motion.div>
    </>
  );
};
