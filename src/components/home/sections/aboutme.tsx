import React from "react";
import { Section } from "./section";
import Image from "next/image";

export function About() {
  return (
    <Section title="about" number="02">
      <div className="min-h-screen py-8 w-full md:w-2/3 float-right text-xl text-destructive font-sans">
        <div className="flex gap-2 my-12">
          <Image
            src="/images/laurenFull.jpg"
            alt={"Lauren Kent"}
            width={100}
            height={100}
            // fill
            // className={`object-cover `}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // quality={90}
          />

          <Image
            src="/images/laurenFull.jpg"
            alt={"Lauren Kent"}
            width={100}
            height={100}
            // fill
            // className={`object-cover `}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // quality={90}
          />
          <Image
            src="/images/laurenFull.jpg"
            alt={"Lauren Kent"}
            width={100}
            height={100}
            // fill
            // className={`object-cover `}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // quality={90}
          />
        </div>
        <h2 className="text-xl text-destructive font-sans font-bold mt-4">
          About Me
        </h2>
        <p className="text-xl text-destructive font-sans">
          Based in Cedar, BC, I&apos;ve dedicated my life to both creating and
          teaching art. With my Master&apos;s Degree in Art Education from the
          University of Victoria, I&apos;ve found joy in helping others discover
          their artistic voice while continuing to develop my own.
        </p>
        <h2 className="text-xl font-bold mt-4">My Background</h2>
        <ul className="">
          <li className="text-xl">
            - Master&apos;s Degree in Art Education - University of Victoria
          </li>
          <li className="text-xl">
            - 25+ years of Public School teaching experience
          </li>
          <li className="text-xl">- Art tutoring for all age groups</li>
          <li className="text-xl">- World traveler and lifelong learner</li>
        </ul>
        <h2 className="text-xl font-bold mt-4">My Inspiration & Studio</h2>
        <p>
          My ambitious gardens and greenhouse provide endless inspiration for my
          work. From my studio on the Nanaimo River, I capture the ever-changing
          beauty of Vancouver Island&apos;s landscapes and the intimate details
          of my own garden sanctuary.
        </p>
      </div>

      <div className="clear-both"></div>
    </Section>
  );
}
